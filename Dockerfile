FROM node:10.9.0-slim
ARG DEBIAN_FRONTEND=noninteractive

LABEL maintainer="Curtis Patrick <curtis.patrick84@gmail.com>"

RUN apt-get update && apt-get install -y tftpd-hpa

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 69/udp
EXPOSE 8069/tcp

RUN apt-get clean

CMD [ "./run.sh" ]
