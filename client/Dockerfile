FROM node:18-alpine AS build

WORKDIR /app/web

COPY package*.json .

RUN --mount=type=cache,target=/app/web/.npm \
  npm set cache /app/web/.npm && \
  npm install --omit=dev && npm install typescript
  
COPY . .

RUN npm run build

###
FROM nginx:1.17-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/web/dist/ /usr/share/nginx/html

EXPOSE 8000

CMD [ "nginx", "-g", "daemon off;" ]