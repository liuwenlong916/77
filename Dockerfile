FROM node:10-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
# Npm
RUN npm config set registry https://registry.npm.taobao.org/ && \
    npm i && \
    npm run build
# Yarn
# RUN yarn config set registry https://registry.npm.taobao.org && \
#     yarn global add @tarojs/cli && \
#     yarn
#执行构建
CMD ["npm", "run", "build"]

#nginx 镜像
FROM nginx:latest

COPY ./nginx/conf.d /etc/nginx/conf.d
COPY ./dist /usr/share/nginx/html

EXPOSE 80
