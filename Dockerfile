FROM node:16-alpine
WORKDIR /opt

## Copy the package.json and install dependencies
COPY package*.json ./

## Install dependencies
RUN npm install --legacy-peer-deps

## Copy rest of the files
COPY . .

RUN npm run build

## Build the project
CMD ["npm", "run", "start"]
