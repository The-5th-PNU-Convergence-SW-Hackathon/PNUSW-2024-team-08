# init.py
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
import redis
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility
from .config import settings
from typing import List

def create_collection(collection_name: str, fields: List[FieldSchema]):
    # fastAPI를 시작할 때, 기존에 저장되 있던 컬렉션은 삭제
    if utility.has_collection(collection_name):
        collection = Collection(name=collection_name)
        collection.drop()

    # 컬렉션 생성
    schema = CollectionSchema(fields, f"{collection_name}_vectors")
    collection = Collection(collection_name, schema)
    return collection

# Milvus 초기화
def initialize_milvus():
    connections.connect("default", host=settings.MILVUS_HOST, port=str(settings.MILVUS_PORT))

    # 동물 컬렉션 초기화
    animal_fields = [
        FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=False), 
        FieldSchema(name="vector", dtype=DataType.FLOAT_VECTOR, dim=512)
    ]
    animal_collection = create_collection("animal_collection", animal_fields)
    
    return animal_collection

# MySQL 초기화
def initialize_mysql():
    engine = create_async_engine(settings.DATABASE_URL)
    AsyncSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, class_=AsyncSession)
    
    return AsyncSessionLocal

# Redis 초기화
def initialize_redis():
    return redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB, decode_responses=True)