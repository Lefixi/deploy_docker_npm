FROM node:14-alpine3.12
ADD ./app /app # we copied our app to container
# change working directory
WORKDIR /app
RUN npm install
# start application
CMD [ "node", "main.js" ] 