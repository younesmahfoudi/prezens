
# Prezens backend spike



## Installation

Install MySql and PhpMyAdmin with Docker

```bash
  cd bdd-spike
```

```bash
  docker-compose-up -d
```


## Run Locally

Set up the environment

```bash
  python3.10 -m venv .venv
```

```bash
  source .venv/bin/activate
```

```bash
  pip install -r requirements.txt
```
Start the server

```bash
  uvicorn sql-app-spike.main:app --reload
```



## API Reference

#### PhpMyAdmin

```http
  http://localhost:8081/
```

#### FastApi

```http
  http://localhost:8000/docs/
```


## Documentation

[FastApi SQL](https://fastapi.tiangolo.com/tutorial/sql-databases/)
[SqlAlchemy engine](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine)

