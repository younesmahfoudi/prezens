#
FROM python:3.10

#
WORKDIR /code

#
COPY ./requirements.txt /code/requirements.txt

#
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

#
COPY ./sql-app-spike /code/sql-app-spike

#
EXPOSE 8000

#
CMD ["uvicorn", "sql-app-spike.main:app", "--host", "0.0.0.0", "--port", "8100"]