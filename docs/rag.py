import enum
import uuid
from typing import List, Optional
from sqlmodel import Field, Relationship, Column
from pgvector.sqlalchemy import Vector
from app.models.base import UUIDModel, TimestampModel

# Define the embedding dimension. 1536 is standard for OpenAI text-embedding-ada-002/3-small.
# 768 is common for many HuggingFace models. We'll start with 1536.
EMBEDDING_DIM = 1536

class DocumentStatus(str, enum.Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    INGESTED = "INGESTED"
    ERROR = "ERROR"

class Document(UUIDModel, TimestampModel, table=True):
    title: str
    file_path: str # Local path or object storage key
    status: DocumentStatus = Field(default=DocumentStatus.PENDING)
    source_type: str # e.g., PDF, MD, CODE

    # Optional link to a course
    course_id: Optional[uuid.UUID] = Field(default=None, foreign_key="course.id")
    course: Optional["Course"] = Relationship(back_populates="documents")
    chunks: List["DocumentChunk"] = Relationship(back_populates="document")

class DocumentChunk(UUIDModel, TimestampModel, table=True):
    document_id: uuid.UUID = Field(foreign_key="document.id")
    chunk_text: str
    
    # pgvector integration
    embedding: Optional[List[float]] = Field(
        sa_column=Column(Vector(EMBEDDING_DIM)),
        default=None
    )
    
    document: Document = Relationship(back_populates="chunks")