FROM node:lts-alpine as builder

ENV NODE_ENV development

WORKDIR /usr/src/app

# Install vue-cli
RUN npm i -g @vue/cli

# Install npm dependencies
COPY ./vue/package.json ./vue/yarn.* /usr/src/app/
RUN yarn

# Build assets
COPY ./vue /usr/src/app/
RUN yarn build

FROM abiosoft/caddy:no-stats

# Copy Caddyfile
COPY Caddyfile /etc/Caddyfile
# Copy assets from builder
COPY --from=builder /usr/src/app/dist /var/www/html

WORKDIR /var/www/html
