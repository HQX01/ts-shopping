# pull official base image
FROM node:16.15.1-alpine

# set working directory
WORKDIR /ts-shopping-web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /ts-shopping/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --force
RUN npm install react-scripts -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]

