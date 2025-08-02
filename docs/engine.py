from sqlmodel import create_engine, SQLModel, Session
from app.core.config import settings

# Import models so they are registered with SQLModel metadata
from app.models import base, study, rag

engine = create_engine(settings.DATABASE_URL, echo=True)

def create_db_and_tables():
    print("Attempting to create tables (if they don't exist)...")
    # In a production setup, you should use Alembic migrations instead of create_all
    SQLModel.metadata.create_all(engine)
    print("Table creation check finished.")

def get_session():
    with Session(engine) as session:
        yield session