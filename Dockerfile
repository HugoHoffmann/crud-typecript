FROM node:14-alpine

WORKDIR /srv/www 

COPY package*.json ./
COPY yarn.lock ./

COPY . .

EXPOSE 3333

RUN npm install --global typescript

RUN npm install -g ts-node

RUN yarn && yarn cache clean

# CMD yarn dev
ENTRYPOINT [ "./init.sh" ] 