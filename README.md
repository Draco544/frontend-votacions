Votacions 

Proyecto académico desarrollado en el ciclo formativo de Desarrollo de Aplicaciones Multiplataforma (DAM).

Se trata de una aplicación web de votaciones desarrollada tomando como referencia el proyecto votacionsDAM2026. El objetivo es poner en práctica los conocimientos adquiridos durante el ciclo, especialmente en el desarrollo de interfaces web y la comunicación entre cliente y servidor.

Tecnologías utilizadas
Vue 3
Vite
Pinia
Vue Router
Vuetify
Node.js
WebSockets
Docker y Docker Compose
Estructura del proyecto
text
votacions/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md

frontend/: contiene el código de la interfaz de usuario.
frontend/src/: contiene el código fuente de la aplicación Vue.
backend/: contiene el servidor y la lógica del backend.
backend/server.js: punto de entrada del servidor.
Dockerfile: define la configuración de cada servicio para Docker.
docker-compose.yml: permite ejecutar el frontend y el backend conjuntamente.
README.md: documentación del proyecto..

Instalación y ejecución
Requisitos
Git
Docker y Docker Compose
Ejecutar con Docker


Construir y ejecutar la aplicación:

bash
docker compose up --build


Una vez iniciados los servicios, acceder al frontend desde el navegador:

http://localhost:8080

El backend utiliza el puerto 3000 para la comunicación con el frontend.

Para detener la aplicación:

bash
docker compose down

Objetivo del proyecto

El objetivo de este proyecto es aplicar de forma práctica los conceptos de desarrollo de aplicaciones vistos durante el ciclo de DAM, trabajando con Vue, la gestión del estado, la navegación entre pantallas y la comunicación entre frontend y backend.

Referencia

Proyecto utilizado como referencia para el desarrollo:

https://github.com/alvaroph/votacionsDAM2026