FROM node:18.14.0
WORKDIR /app
EXPOSE 80

COPY .yarn /app/.yarn

RUN corepack enable && yarn set version 3.1.1

# npm install in a way that allows caching
COPY package.json /app/package.json

COPY yarn.lock /app/yarn.lock
COPY .yarnrc.yml /app/.yarnrc.yml
RUN yarn install
COPY tsconfig.json /app/tsconfig.json
COPY webpack.config.js /app/webpack.config.js
COPY public /app/public

# copy the rest of the content
COPY server /app/server
COPY src /app/src

ARG PROXY_URL
RUN ["sh", "-c", "touch /app/.env"]

RUN echo "PROXY_URL=$PROXY_URL" >> /app/.env

RUN npm run build
CMD ["npm", "start"]