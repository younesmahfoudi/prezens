# Prezens backend spike



## Install and run all with Docker


```bash
  (sql-app-spike/database.py)
  
  SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:root1234@db/prezens_db"
```

```bash
  docker-compose-up -d
```

## Install only bdd

Install MySql and PhpMyAdmin with Docker

```bash
  cd bdd-spike
```

```bash
  docker-compose-up -d
```
## Run only FastApi with python environement

Set up the environement

```bash
  (sql-app-spike/database.py)
  
  SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:root1234@localhost:6033/prezens_db"
```

```bash
  python3 -m venv .venv
```

```bash
  source .venv/bin/activate
```

```bash
  pip install -r requirements.txt
```
Start the server

```bash
  uvicorn sql-app-spike.main:app --port 8100 --reload
```



## API Reference

#### PhpMyAdmin

```http
  http://localhost:8081/
```

#### FastApi 

```http
  http://localhost:8100/docs/
```

## Documentation

[FastApi SQL](https://fastapi.tiangolo.com/tutorial/sql-databases/)
[SqlAlchemy engine](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine)
[Portainer](https://www.portainer.io/blog/portainer-your-docker-gui-for-your-ubuntu-linux-desktop)