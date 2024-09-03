# schemas.py
from pydantic import BaseModel

class RecommendRequest(BaseModel):
    user_id: int

class AnimalIntroductionRequest(BaseModel):
    animal_id: int