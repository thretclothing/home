FROM node:14-slim as buildContainer
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build:ssr

FROM node:14-slim
WORKDIR /usr/src/app
COPY --from=buildContainer /usr/src/app/package*.json ./
COPY --from=buildContainer /usr/src/app/dist ./
EXPOSE 8080
CMD ["npm", "run", "serve:ssr"]
