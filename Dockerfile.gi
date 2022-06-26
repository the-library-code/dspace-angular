FROM node:16-alpine as build
WORKDIR /app
ADD . /app/
EXPOSE 4000

RUN yarn install --network-timeout 300000 \
    && yarn build

FROM node:16-alpine
COPY --from=build --chown=node /app /app
WORKDIR /app
USER node
