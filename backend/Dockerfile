# Single-stage for plain JavaScript backend
FROM node:18-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production  # Skip devDependencies

# Copy application code
COPY . .

# Expose your backend port
EXPOSE 9676

# Start command (adjust if your entry file is different)
CMD ["node", "index.js"]