FROM		ubuntu:14.04

RUN			apt-get update
RUN			apt-get install -y git curl nano vim tree 
RUN			apt-get install -y nginx

RUN			curl https://raw.githubusercontent.com/sayanee/dotfiles/master/.bashrc > ~/.bashrc

RUN			mkdir /apps
ADD			. /apps/html

RUN			sudo mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.original
RUN	    sudo mv /apps/html/nginx.conf /etc/nginx

WORKDIR	/apps/html

EXPOSE	8888
CMD			["nginx"]
