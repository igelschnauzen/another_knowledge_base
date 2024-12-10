FROM node:lts-alpine

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /home/node/app

USER node

EXPOSE 3000

CMD ["npm", "start" ]