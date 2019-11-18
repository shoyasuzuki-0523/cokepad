  
FROM node:10.16.3-alpine

RUN mkdir /app_name 
ENV APP_ROOT /app_name 
WORKDIR $APP_ROOT

RUN npm install -g yarn
RUN yarn add create-react-app
RUN yarn add react-scripts

ADD . $APP_ROOT

CMD ["yarn", "start"]