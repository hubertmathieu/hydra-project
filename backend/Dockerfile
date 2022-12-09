FROM node:18.8.0
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g nodemon && npm install
COPY . .
CMD ["npm", "run", "watch"]