# models.py
from sqlalchemy import Column, Integer, String, DateTime, Text, Enum as PgEnum
from sqlalchemy.ext.declarative import declarative_base
from .enums import Province, District

Base = declarative_base()

class Animal(Base):
    __tablename__ = "animal_tb"

    id = Column(Integer, primary_key=True, index=True)
    shelter_id = Column(Integer)  
    age = Column(String(255))
    color = Column(String(255))
    gender = Column(String(255))
    kind = Column(String(255))
    region = Column(String(255))
    special_mark = Column(String(255))
    happen_place = Column(String(255))
    neuter = Column(String, nullable=True)
    removed_at = Column(DateTime, nullable=True)
    introduction_title = Column(String(255))
    introduction_content = Column(Text)  
    name = Column(String(255))

class Group(Base):
    __tablename__ = "groups_tb"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    province = Column(PgEnum(Province))
    district = Column(PgEnum(District))
    sub_district = Column(String(255))
    description = Column(String(255))
    category = Column(String(255))
    profileURL = Column(String(255))
    participant_num = Column(Integer, default=0)
    like_num = Column(Integer, default=0)