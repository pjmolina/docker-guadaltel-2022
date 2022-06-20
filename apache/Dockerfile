#A basic apache sample

FROM ubuntu:22.04
LABEL Author="Kimbro Staken"
LABEL Version="0.1"

RUN apt update && apt install -y apache2 

ENV APACHE_LOG_DIR /var/log/apache2

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]




