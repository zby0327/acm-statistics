FROM node:alpine

RUN apk --no-cache add wait4ports

WORKDIR /var/project

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD wait4ports -q -s 60 tcp://mongo:27017 && npm start