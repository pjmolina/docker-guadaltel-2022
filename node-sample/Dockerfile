FROM node:18-alpine3.15

LABEL AUTHOR=pjmolina
LABEL VERSION="v. 1.0"

RUN mkdir /app /app-log /config
WORKDIR /app

VOLUME /app-log
VOLUME /config

COPY package.json .
COPY index.js .

RUN npm i

ENV PORT=80
ENV VERSION=1.2.3
ENV APP_PASSWORD=abc
ENV APP_NAME=app1

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s \
    CMD curl -f http://localhost/ping || exit 1

# -------------------------------

CMD [ "node", "/app/index.js"]

