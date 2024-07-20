FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g nodemon
RUN npm install -g ts-node

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]