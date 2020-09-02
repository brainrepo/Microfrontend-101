FROM php:7.4
WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y git 

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer


COPY composer*.json ./
RUN composer install
COPY . . 
EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "/usr/src/app"]

