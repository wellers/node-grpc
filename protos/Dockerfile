FROM node:18.14.0
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY src /app/src
COPY entrypoint.sh /app/entrypoint.sh

CMD ["/bin/sh", "entrypoint.sh"]