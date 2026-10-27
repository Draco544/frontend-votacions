# Votacions

Proyecto académico desarrollado en el ciclo formativo de Desarrollo de Aplicaciones Multiplataforma (DAM).

Se trata de una aplicación web de votaciones inspirada en el proyecto `votacionsDAM2026`, con el objetivo de poner en práctica los conocimientos adquiridos en el ciclo, especialmente en el desarrollo de interfaces web, la gestión del estado, la navegación entre pantallas y la comunicación entre cliente y servidor.

## Objetivo del proyecto

El objetivo principal de esta aplicación es crear un sistema de votación funcional y visualmente clara, utilizando tecnologías modernas del ecosistema de Vue y Node.js. También permite trabajar con conceptos como:

- Desarrollo front-end con Vue 3
- Gestión del estado con Pinia
- Enrutado con Vue Router
- Comunicación cliente-servidor mediante WebSockets
- Contenedores con Docker y Docker Compose

## Tecnologías utilizadas

- Vue 3
- Vite
- Pinia
- Vue Router
- Node.js
- WebSockets
- Docker
- Docker Compose

## Estructura del proyecto

```text
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
├── README.md
└── .gitignore
```

## Descripción de directorios y archivos

- `frontend/`: contiene la interfaz de usuario de la aplicación.
- `frontend/src/`: almacena el código fuente de la aplicación Vue.
- `backend/`: incluye el servidor y la lógica del backend.
- `backend/server.js`: punto de entrada del servidor.
- `Dockerfile`: configuración del contenedor para cada servicio.
- `docker-compose.yml`: permite ejecutar simultáneamente el frontend y el backend.
- `README.md`: documentación del proyecto.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Git
- Docker
- Docker Compose

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Draco544/votacions.git
cd votacions
```

### 2. Ejecutar con Docker

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up --build
```

Esto levantará tanto el backend como el frontend.

### 3. Acceder a la aplicación

Una vez iniciados los servicios, puedes abrir la aplicación en el navegador:

- Frontend: http://localhost:8080
- Backend: http://localhost:3000

> El backend se utiliza para la comunicación con el frontend y para gestionar la lógica de votaciones.

### 4. Detener la aplicación

Para parar los contenedores, ejecuta:

```bash
docker compose down
```

## Referencia

Proyecto utilizado como referencia para el desarrollo:

- `votacionsDAM2026`

## Notas

Este proyecto está pensado como ejercicio académico para poner en práctica conceptos de desarrollo web full stack en un entorno realista, combinando tecnologías modernas y un flujo de trabajo basado en contenedores.
