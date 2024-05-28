FROM nginx:latest

COPY nginx/conf.d/* /etc/nginx/conf.d/

RUN mkdir /www

RUN mkdir /www/html

COPY nginx/html/ /www/html/
