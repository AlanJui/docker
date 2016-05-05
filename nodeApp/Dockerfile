FROM			ubuntu:14.04

RUN				apt-get update
RUN				apt-get install -y git curl nano vim 
RUN				apt-get install -y git nodejs nodejs-dev npm

RUN				curl https://raw.githubusercontent.com/sayanee/dotfiles/master/.bashrc > ~/.bashrc

RUN				ln -s /usr/bin/nodejs  /usr/local/bin/node

RUN				mkdir /apps
ADD				. /apps/nodeApp

WORKDIR		/apps/nodeApp

EXPOSE		8000
CMD				["node", "/apps/nodeApp/app.js"]
