FROM node:10.9.0-slim
ARG DEBIAN_FRONTEND=noninteractive

LABEL maintainer="Curtis Patrick <curtis.patrick84@gmail.com>"

RUN apt-get update && apt-get install -y tftp-hpa

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install

ENTRYPOINT ["in.tftpd"]

EXPOSE 69/udp
EXPOSE 8069/tcp

CMD ["-L", "--secure", "/var/tftpboot", "&&", "npm", "start"]
