# services.py
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
from fastapi import HTTPException
from pymilvus import Collection
import numpy as np  
from .config import settings
from typing import List
import logging
from .init import initialize_mysql, initialize_redis, initialize_milvus
from .crud import get_db_session, find_animal_by_id, find_all_animals, find_animal_ids_with_null_title

# Milvus, MySQL, 백터화 객체 초기화, PCA 객체 초기화
animal_collection = initialize_milvus()
AsyncSessionLocal = initialize_mysql()
redis_client = initialize_redis()
vectorizer = TfidfVectorizer()
animal_pca = PCA(n_components=512)

# 로깅 설정
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def vectorize_and_reduce(texts: List[str], pca_model: PCA) -> np.ndarray:
    # 텍스트 데이터를 TF-IDF 벡터로 변환 후 차원 축소
    # 백터의 길이는 Milvus 초기 설정시 설정한 차원으로 나누어져야 함 => 길이를 축소해서 나누어지게 만듦
    tfidf_matrix = vectorizer.fit_transform(texts)
    vectors = tfidf_matrix.toarray()
    return animal_pca.fit_transform(vectors)

def insert_vectors_to_milvus(mivus_collection: Collection, ids: List[int], vectors: np.ndarray):
    # Milvus에 데이터 삽입
    mivus_collection.insert([ids, vectors.tolist()])

    # 인덱스 생성
    index_params = {"index_type": "IVF_FLAT", "metric_type": "L2", "params": {"nlist": 128}}
    mivus_collection.create_index("vector", index_params)

    mivus_collection.load()

def search_similar_items(query_vec, collection, result_num):
    search_params = {"metric_type": "L2", "params": {"nprobe": 10}}
    results = collection.search([query_vec], "vector", search_params, limit=result_num)
    similar_item_ids = [res for res in results[0].ids]
    return similar_item_ids

def update_matrix_and_index(matrix, index, new_vectors, new_entities):
    current_length = len(matrix)
    matrix = np.vstack([matrix, new_vectors])
    index.update({entity.id: current_length + idx for idx, entity in enumerate(new_entities)})
    return matrix, index

async def load_and_vectorize_animal_data():
    # 비동기 세션을 사용하여 데이터베이스에 연결. Animal 테이블에서 모든 데이터를 가져와서 리스트로 변환
    # 만약, DB에 Animal 데이터가 하나도 없다면 에러 발생하니 주의
    async with get_db_session(AsyncSessionLocal) as db:
        animals = await find_all_animals(db)
        texts = [
            f"{animal.age} {animal.color} {animal.gender} {animal.kind} {animal.region} {animal.special_mark} {animal.neuter}"
            for animal in animals
        ]

    # PCA 객체를 사용하여 벡터 차원을 512로 축소 
    reduced_vectors = vectorize_and_reduce(texts, animal_pca)
    ids = [animal.id for animal in animals]
    insert_vectors_to_milvus(animal_collection, ids, reduced_vectors)
    
    return reduced_vectors, {animal.id: idx for idx, animal in enumerate(animals)}

async def get_similar_animals(animal_id, animal_index, animal_matrix):
    async with get_db_session(AsyncSessionLocal) as db:
        animal = await find_animal_by_id(db, animal_id)
    
    # animal_id에 대한 동물이 존재여부와 인덱스 존재여부 체크
    idx = animal_index.get(animal_id)
    if not animal or idx is None:
        return []
    
    # 해당 동물의 벡터를 배열로 변환하고, 전체 데이터베이스 벡터와의 코사인 유사도 계산
    query_vec = animal_matrix[idx].tolist() 
    similar_animal_ids = search_similar_items(query_vec, animal_collection, 5)

    return similar_animal_ids

# MySQL에 저장된 새로운 동물 데이터를 백터 DB에 업데이트
async def update_new_animals(animal_index, animal_matrix):
    async with get_db_session(AsyncSessionLocal) as db:
        # 현재 animal_index에서 기존의 모든 동물 ID를 가져옴
        animals = await find_all_animals(db)
        existing_ids = set(animal_index.keys())
        new_animals = [animal for animal in animals if animal.id not in existing_ids]

        if not new_animals:
            return

    # 새로운 동물 데이터로 텍스트 리스트를 생성
    new_texts = [
        f"{animal.shelter_id} {animal.age} {animal.color} {animal.gender} {animal.kind} {animal.region} {animal.special_mark} {animal.happen_place}"
        for animal in new_animals
    ]

    # 새로운 텍스트 데이터를 TF-IDF 벡터로 변환하고, 새로운 동물들의 ID 리스트를 생성
    new_vectors = vectorizer.transform(new_texts).toarray()
    reduced_new_vectors = animal_pca.transform(new_vectors)  
    new_ids = [animal.id for animal in new_animals]

    insert_vectors_to_milvus(animal_collection, new_ids, reduced_new_vectors)
    
    # 기존 animal_matrix에 새로운 벡터 추가하고, animal_index를 업데이트하여 새로운 동물들의 ID와 인덱스를 추가
    animal_matrix, animal_index = update_matrix_and_index(animal_matrix, animal_index, reduced_new_vectors, new_animals)

async def generate_animal_introduction(animal_id):
    async with get_db_session(AsyncSessionLocal) as db:
        animal = await find_animal_by_id(db, animal_id)
        if not animal:
            raise HTTPException(status_code=404, detail="해당 동물을 찾을 수 없습니다.")
    
    prompt = (
        "### Persona ###\n"
        "1. Your task is to write a introduction for the animal based on the following information.\n"
        "2. Highlight the animal's positive traits and suitability as a pet to encourage potential adopters.\n"
        "### Animal Information ###\n"
        f"Name: {animal.name}\n"
        f"Species: {animal.kind}\n"
        f"Gender: {'Male' if animal.gender == 'M' else 'Female'}\n"
        f"Spayed/Neutered: {'Yes' if animal.neuter == 'Y' else 'No'}\n"
        f"Color: {animal.color}\n"
        f"Approximate Age: {animal.age}\n"
        f"Location Found: {animal.happen_place}\n"
        f"Special Characteristics: {animal.special_mark}\n"
        "### Background ###\n"
        f"{animal.name}, a {animal.kind}, was found in {animal.happen_place}. Known for its {animal.special_mark} and unique {animal.color} coat, {animal.name} has shown loving nature despite its circumstances.\n"
        "### Title ###\n"
        "1. Provide a normal title for the introduction in Korean.\n"
        "2. The title should be 25 characters or fewer.\n"
        "3. Please include only the city/district without the detailed address for {animal.happen_place}. {animal.happen_place}'에서 발견된' {animal.age}'살' {animal.name}.\n"
        "### Response Format ###\n"
        "1. The first line should be the title, prefixed with 'Title: '.\n"
        "2. After the title, there should be two newline characters (\\n\\n).\n"
        "3. The introduction should follow after the newline characters.\n"
        "### Writing Guidelines ###\n"
        "1. Provide the introduction in Korean.\n"
        "2. Write from the perspective of a shelter staff member who cares for the animal. Use a tone that conveys warmth and care. More than half of the sentences should end with '요' to maintain a gentle tone."
        "3. Keep the text between 150 and 230 characters and avoid using negative language. "
        "4. Avoid repetition.\n"
        "5. Include details about the animal's characteristics, gender, and approximate age throughout the description."
    )

    chatmodel = ChatOpenAI(
        model="gpt-4o-mini", 
        temperature=0.3, 
        max_tokens=750, 
        openai_api_key = settings.OPENAI_API_KEY
        )
    
    prompt_template = PromptTemplate(input_variables=["prompt"], template="{prompt}")
    formatted_prompt = prompt_template.format(prompt=prompt)

    # response.content 사용하여 메시지 내용 추출
    response = chatmodel.invoke(formatted_prompt)
    response_text = response.content 
    
    # 타이틀만 추출
    response_lines = response_text.strip().split('\n')
    title = response_lines[0].replace("Title: ", "").strip()
    introduction = '\n'.join(response_lines[1:]).strip()

    return title, introduction

async def get_animal_ids_with_null_title():
    async with get_db_session(AsyncSessionLocal) as db:
        return await find_animal_ids_with_null_title(db)

async def update_animal_introductions(animal_ids):
    # 5개씩 작업하고 커밋. (모두 처리하고 커밋하면, 에러가 발생하면 받아온 데이터 다 날릴 수 있음)
    async with get_db_session(AsyncSessionLocal) as db:
        for i in range(0, len(animal_ids), 5):
            batch = animal_ids[i:i+5]
            for animal_id in batch:
                title, introduction = await generate_animal_introduction(animal_id)
                animal = await find_animal_by_id(db, animal_id)

                if animal:
                    animal.introduction_title = title
                    animal.introduction_content = introduction
                    db.add(animal)
                    logger.info(f"동물 ID {animal_id} 업데이트 완료.")

            await db.commit()
    
    logger.info("----------------배치 작업 완료----------------")

async def schedule_process_animal_introduction():
    animal_ids = await get_animal_ids_with_null_title()
    update_animal_introductions(animal_ids)