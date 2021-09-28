FROM node:14.15-alpine

WORKDIR /app

COPY ./dist/apps/movies-microservice ./

# install development tools to build native addons and libs
RUN apk add gcc g++ make

RUN npm install

RUN npm install passport

CMD ["node", "main.js"]