FROM node:9
WORKDIR /app
COPY ./ /app
ENV NODE_ENV=production
RUN npm install && \
  npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
