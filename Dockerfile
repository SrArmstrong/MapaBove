# Dockerfile

# Etapa 1 - construimos la aplicación
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80
EXPOSE 80
CMD ["npm", "run", "preview", "--", "--port", "80", "--host"]

##
#!/bin/bash
echo "=== Switching Traffic to GREEN ==="

cd /home/SergioAldavalde/app

# Cambiar nginx para apuntar a GREEN (puerto 8082)
sed -i 's/server localhost:8081;/server localhost:8082;/' nginx/nginx.conf
sed -i 's/# server localhost:8082;/server localhost:8082;/' nginx/nginx.conf

# Recargar nginx
docker-compose restart nginx

