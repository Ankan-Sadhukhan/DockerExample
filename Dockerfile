FROM node:latest

WORKDIR /usr/ankan/dockerExample

COPY . .

RUN npm install

EXPOSE 3000

CMD node index.js
