FROM node:16.13.0-alpine

USER node
WORKDIR /home/node

ADD --chown=node:node . .

RUN npm install 

CMD [ "node", "app.js" ]



