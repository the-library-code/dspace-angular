FROM node:16-alpine as build
WORKDIR /app
ADD . /app/
EXPOSE 4000

RUN yarn install --network-timeout 300000 \
    && yarn build:prod \
    && mv dist /dist

RUN rm -rf /app

FROM node:16-alpine
COPY --from=build --chown=node /dist /app/dist
USER node
