FROM node:current-alpine as builder

ENV NODE_ENV development

WORKDIR /usr/src/app

# Install npm dependencies
COPY ./package.json ./yarn.* /usr/src/app/
RUN yarn

# Build assets
COPY ./ /usr/src/app/
RUN NODE_ENV=production yarn build

FROM abiosoft/caddy:no-stats

# Copy Caddyfile
COPY Caddyfile /etc/Caddyfile
# Copy assets from builder
COPY --from=builder /usr/src/app/dist /var/www/html

WORKDIR /var/www/html
