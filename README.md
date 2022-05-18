
![Logo](https://www.zupimages.net/up/22/20/o878.png)


# Prezens

Prezens is an application for administrative management in education. This project was realized in the framework of an end of study project.

## Installation

Install prezens with Docker

```bash
  docker-compose up -d
```

## Run Locally (dev)

Clone the project

```bash
  git clone https://github.com/younesmahfoudi/prezens
```

First, follow the instructions in the prez-backend ReadMe to deploy the backend

```bash
  cd prez-frontend/prez-ui
```

After launching your backend separately, you need to change the proxy address to point to http://localhost:8100. So in the proxy.conf.json file:

```bash
  "target": "http://localhost:8100"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng serve
```


## Demo

Create an admin on

```http
  http:localhost:4200/adminsignup
```

Use the application on

```http
  http:localhost:4200
```


## Tech Stack

**Client:** Angular, Material, Syncfusion

**Server:** Python, MySql, FastApi, SqlAlchemy

**Deployment:** Docker


## Authors

- [@Younes Mahfoudi](https://github.com/younesmahfoudi)
- [@Thibaut Truffier](https://github.com/DatraX777)

