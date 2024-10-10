# node-ts-application-NOC


El objetivo es crear una serie de tareas usando Arquitectura Limpia con TypeScript

#dev

1.Clonar el archivo .env.tempplate a .env
2.Configurar las variables de entorno
````
PORT=3000

MAILER_EMAIL=
MAILER_SECRET_KEY=

PROD = false
````

3.Ejecutar el comando ``npm install``
4. Ejecutar ``npm run dev``

<!-- Para hacer la instalación y conexión con la base de datos de mongo en docker  -->
1. instalar docker 
2. crear un archivo "docker-compose.yml" dentro de tu projecto raíz
<!-- version: '24.0.7'

services:
  mongo-db:
    image: mongo:6.0.6
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
    volumes:
      - ./mongo:/data/db
    ports:
      - 27017:27017 -->
3. crear variales de entorno en tu .env 
<!-- MONGO_URL
MONGO_DB_NAME
MONGO_USER
MONGO_PASS -->
4. abrir docker 
5. en tu terminal dentro de tu proyecto ejecuta docker-compose up -d o docker compose up 
6. abrir mongoDB Compass y crear tu conexión de base de datos con el user y password que tienes definida en tus variables de entorno
5. para conectar con el proyecto se usara https://mongoosejs.com/ 
6. en tu terminal ejecuta el siguiente comando npm install mongoose --save