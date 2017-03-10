FROM alpine:3.4
MAINTAINER Alex Peguero <apeg3200@gmail.com>
RUN apt-get -yqq update && apt-get -yqq install nginx git vim
