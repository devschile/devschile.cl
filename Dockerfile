FROM node:10-alpine as builder

ENV NODE_ENV development

WORKDIR /usr/src/app

# Install build dependencies
RUN apk add --no-cache make gcc g++ python git && \
  # Install grunt and bower
	npm i -g grunt-cli@1.2.0 bower

# Install npm dependencies
COPY ./public/package.json ./public/package-lock.* /usr/src/app/
RUN npm i

# Install bower dependencies
COPY ./public/bower.json /usr/src/app/
RUN bower install --allow-root

# Build assets
COPY ./public /usr/src/app/
RUN grunt

FROM abiosoft/caddy:no-stats

# Copy Caddyfile
COPY Caddyfile /etc/Caddyfile
# Copy assets from builder
COPY --from=builder /usr/src/app/dist /var/www/html

WORKDIR /var/www/html
