FROM node:lts
WORKDIR /home/user-authentication


COPY package*.json ./

COPY yarn.lock .

RUN yarn 

COPY . .

EXPOSE 3333

CMD ["yarn","dev"]