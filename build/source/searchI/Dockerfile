
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:1.23-alpine
# Clear default Nginx config
RUN rm -rf /etc/nginx/conf.d/*
# Copy built files
COPY --from=builder /app/dist/search-i/browser /usr/share/nginx/html
# Copy our fixed config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]