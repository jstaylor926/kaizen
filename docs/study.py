from sqlmodel import Field, Relationship
from typing import List, Optional
import uuid
from app.models.base import UUIDModel, TimestampModel

class User(UUIDModel, TimestampModel, table=True):
    __tablename__ = "user_account" # Explicit name to avoid conflicts with SQL reserved word 'user'
    email: str = Field(unique=True, index=True)
    
    courses: List["Course"] = Relationship(back_populates="user")

class Course(UUIDModel, TimestampModel, table=True):
    name: str = Field(index=True)
    user_id: uuid.UUID = Field(foreign_key="user_account.id")

    user: User = Relationship(back_populates="courses")
    documents: List["Document"] = Relationship(back_populates="course")