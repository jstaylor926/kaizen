#!/bin/bash
set -e

# Execute SQL to enable the vector extension
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE EXTENSION IF NOT EXISTS vector;
    \echo "pgvector extension ensured."
    \dx
EOSQL