FROM centos7.5-jr-n-z
MAINTAINER testing <testing@naritech.com>

ADD ./dist/ /home/nusp/webapp/dist
ADD ./nginx.conf /usr/local/nginx/conf/nginx.conf
RUN chmod 775 -R /home/nusp/webapp
CMD ["/usr/local/nginx/sbin/nginx","-g","daemon off;"]

EXPOSE 31451