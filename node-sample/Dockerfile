FROM node:18-alpine3.15

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY index.js .

RUN npm i

EXPOSE 9099

# -------------------------------

CMD [ "node", "/app/index.js"]

