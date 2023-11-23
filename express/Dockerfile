FROM node:18-alpine

# System packages
RUN apk --no-cache add curl

# App
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

CMD ["npm", "run", "start"]