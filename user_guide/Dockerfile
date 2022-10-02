FROM node:16
EXPOSE 80/tcp
WORKDIR /app/docs
COPY ./user_guide /app/docs
RUN yarn install && yarn build
ENTRYPOINT ["yarn", "run", "serve", "--port", "80", "--host", "0.0.0.0"]