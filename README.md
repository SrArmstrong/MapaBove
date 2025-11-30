# 🚀 Instrucciones para clonar y levantar el proyecto

## 1 Clonar el repositorio
```bash
git clone https://github.com/SrArmstrong/MapaBove.git
cd MapaBove
```

## 2 Instalar dependencias
```bash
npm install
```

## 3 Levantar la aplicación SIN Docker
```bash
node server.js
```

## 4 Ejecutar pruebas con Supertest/Jest
```bash
npm test
```

## 5 Levantar la aplicación CON Docker

### Construir la imagen

```bash
docker build -t mapabove .
```

### Levantar los servicios con docker-compose

```bash
docker-compose up --build -d

```

