FROM node:16-alpine as build
ADD . /src/
WORKDIR /src

RUN yarn install --network-timeout 300000 \
    && yarn -cwd scripts merge-i18n -s src/themes/gi/assets/i18n \
    && yarn build:prod \
    && mkdir /app \
    && mv /src/dist /app/ \
    && mv /src/config /app/config \
    && rm -rf /src \
    && chown -R node:node /app

FROM node:16-alpine
COPY --from=build --chown=node /app /app
WORKDIR /app
EXPOSE 4000
USER node
