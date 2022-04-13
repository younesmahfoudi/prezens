#
FROM python:3.10

#
WORKDIR /code

#
COPY app/requirements.txt /code/requirements.txt

#
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

#
COPY app /code/prez-app

#
EXPOSE 8000

#
CMD ["uvicorn", "prez-app.main:app", "--host", "0.0.0.0", "--port", "8100"]