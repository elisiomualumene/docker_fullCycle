FROM node:lts

WORKDIR usr/src/app

COPY . .

RUN npm install

ENTRYPOINT [ "node", "index.js" ]