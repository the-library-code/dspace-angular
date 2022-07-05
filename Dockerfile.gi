FROM node:16-alpine as build
WORKDIR /app
ADD . /app/
EXPOSE 4000

RUN yarn install --network-timeout 300000 \
    && yarn build

FROM node:16-alpine
RUN yarn global add @angular/cli@11.2.15
COPY --from=build --chown=node /app /app
WORKDIR /app
USER node
