# Dependencies stage to avoid rebuilds if the package.json hasn’t changed.
FROM node:14-alpine as deps

WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm install npm@latest -g && npm install

FROM node:14-alpine as build

WORKDIR /usr/app
ARG PODCAST_API_URL
ENV NODE_ENV=production
ENV PODCAST_API_URL=$PODCAST_API_URL

COPY . .
COPY --from=deps /usr/app /usr/app

RUN npm run build

FROM node:14-alpine

EXPOSE 3000

ARG PODCAST_API_URL
ENV NODE_ENV=production
ENV PODCAST_API_URL=$PODCAST_API_URL

COPY --from=build /usr/app/next.config.js ./
COPY --from=build /usr/app/public ./public
COPY --from=build /usr/app/.next ./.next
COPY --from=build /usr/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]
