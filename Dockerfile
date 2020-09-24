FROM node:13-alpine
RUN mkdir /app

WORKDIR /app
# Install npm production packages
COPY package.json /app/
RUN npm install
COPY . /app
ENV NODE_ENV production
ENV PORT 3076
EXPOSE 3076
CMD ["npm", "start"]