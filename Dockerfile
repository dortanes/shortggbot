FROM node:16-alpine
WORKDIR /opt

## Copy the package.json and install dependencies
COPY package*.json ./

## Install dependencies
RUN yarn install --frozen-lockfile

## Copy rest of the files
COPY . .

RUN yarn build

## Build the project
CMD ["yarn", "start"]
