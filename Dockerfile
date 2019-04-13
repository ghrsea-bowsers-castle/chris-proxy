FROM node:8

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3050

CMD ["npm", "run", "server-dev"]