# Etapa 1: Construcción
FROM node:18 AS builder

WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar tsconfig.json
COPY tsconfig.json ./

# Copiar código fuente
COPY src ./src

# Compilar TypeScript
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar solo lo necesario
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
