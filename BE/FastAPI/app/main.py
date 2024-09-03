# main.py
from fastapi import FastAPI, BackgroundTasks
import random
from app.services import load_and_vectorize_animal_data, get_similar_animals, update_new_animals, redis_client, generate_animal_introduction, get_animal_ids_with_null_title, update_animal_introductions, schedule_process_animal_introduction
from contextlib import asynccontextmanager
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from functools import partial
from .schemas import RecommendRequest, AnimalIntroductionRequest

app = FastAPI()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # 데이터를 로드하고 벡터화
    global animal_matrix, animal_index
    animal_matrix, animal_index = await load_and_vectorize_animal_data()

    # 스케줄러 설정,
    scheduler = AsyncIOScheduler()

    # 매일 자정 10분에 process_animal_introduction 실행
    scheduler.add_job(schedule_process_animal_introduction, 'cron', hour=0, minute=10)

    # 매일 16시 26분에 update_new_animals 실행
    scheduler.add_job(partial(update_new_animals, animal_index, animal_matrix), 'cron', hour=16, minute=26)
    scheduler.start()

    try:
        yield
    finally:
        scheduler.shutdown()

# lifespan 컨텍스트 매니저 설정
app.router.lifespan_context = lifespan

@app.post("/recommend/animal")
async def recommend_animal(request: RecommendRequest):
    # user_id를 바탕으로 Redis에서 조회한 동물 id 리스트 가져오기
    key = f"animalSearch:{request.user_id}"
    animal_ids_str = redis_client.lrange(key, 0, -1)

    # 문자열 리스트를 정수 리스트로 변환
    animal_ids = list(map(int, animal_ids_str))
    unique_ids = set()

    # 각 동물 ID에 대해 유사한 동물들을 추천 받음
    for animal_id in animal_ids:
        recommended_animals = await get_similar_animals(animal_id, animal_index, animal_matrix)
        unique_ids.update(recommended_animals)

    unique_list = list(unique_ids)

    # 5개가 넘어가면, 5개의 동물을 랜덤으로 골라서 추천해준다
    if len(unique_list) > 5:
        recommended_animals = random.sample(unique_list, 5)
    else:
        recommended_animals = unique_list  

    return {"recommendedAnimals": recommended_animals}

@app.post("/introduce/animal")
async def process_animal_introduction(background_tasks: BackgroundTasks):
    animal_ids = await get_animal_ids_with_null_title()
    background_tasks.add_task(update_animal_introductions, animal_ids)
    
    return {"success": "true", "code": 200, "message": "OK", "result": "null"}

@app.post("/introduce/animal/test")
async def introduce_animal(request: AnimalIntroductionRequest):
    introduction = await generate_animal_introduction(request.animal_id)
    
    return {"introduction": introduction}