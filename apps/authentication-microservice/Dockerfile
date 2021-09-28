FROM node:14.15-alpine

WORKDIR /app

COPY ./dist/apps/authentication-microservice ./

# install development tools to build native addons and libs
RUN apk add gcc g++ make

RUN npm install

CMD ["node", "main.js"]