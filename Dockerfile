FROM zzrot/alpine-caddy

COPY Caddyfile /etc/Caddyfile
COPY ./public /var/www/html

WORKDIR /var/www/html
# Instala npm y dependencias para compilar
# Instala grunt y bower
# Instala las dependencias de npm y bower
# Ejecuta grunt
# Elimina la cache de npm, npm y archivos temporales
RUN apk add --no-cache --virtual build-dependencies make gcc g++ python nodejs-npm && \
	npm i -g grunt-cli@1.2.0 bower && \
	npm install && \
	bower install --allow-root && \
	grunt && \
	npm cache clean --force && \
  	apk del build-dependencies && \
  	rm -rf ~/.node-gyp /tmp/*
