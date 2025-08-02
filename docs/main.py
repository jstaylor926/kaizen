from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.db.engine import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Create database tables
    create_db_and_tables()
    yield
    # Shutdown (if any cleanup needed)

app = FastAPI(
    title="IntelliStudy Backend",
    version="0.1.0",
    lifespan=lifespan
)

@app.get("/api/health")
def read_root():
    return {"status": "ok", "message": "IntelliStudy Backend is running"}