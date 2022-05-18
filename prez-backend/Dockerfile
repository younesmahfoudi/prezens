#
FROM python:3.10

#
WORKDIR /code

#
COPY prez-app/requirements.txt /code/requirements.txt

#
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

#
COPY prez-app /code/prez-app

#
EXPOSE 8000

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

#
CMD ["uvicorn", "prez-app.main:app", "--host", "0.0.0.0", "--port", "8100"]