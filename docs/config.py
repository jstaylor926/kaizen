from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    # Database configuration
    DATABASE_URL: str = Field(...)

    # Redis configuration
    REDIS_HOST: str = Field(...)
    REDIS_PORT: int = Field(...)

    # Celery configuration
    @property
    def CELERY_BROKER_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}/0"

    @property
    def CELERY_RESULT_BACKEND(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}/0"

    class Config:
        env_file = ".env"
        env_file_encoding = 'utf-8'

settings = Settings()