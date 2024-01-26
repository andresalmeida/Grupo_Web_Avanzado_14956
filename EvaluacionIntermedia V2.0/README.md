# Evaluación Intermedia App

Esta aplicación web está diseñada para ser un creador de evaluaciones para maestros. Permite a los maestros ingresar su nombre, crear nuevas evaluaciones con preguntas y respuestas de opción múltiple, y ver las evaluaciones que han creado.

## Instalación

La aplicación está dividida en tres carpetas principales: `backend`, `database`, y `frontend`. A continuación se detallan los pasos para instalar cada componente.

### Backend

1. Abre una terminal en la carpeta `backend`.
2. Ejecuta `npm init -y` para inicializar el archivo `package.json`.
3. Luego, ejecuta `npm install express` para instalar la dependencia de Express.
4. Crea un archivo llamado `server.js` en la carpeta `backend` y agrega tu código de servidor Express.
5. Finalmente, ejecuta `node server.js` para iniciar el servidor.

### Database

No hay necesidad de instalación adicional para la carpeta `database`.

### Frontend

1. Abre una terminal en la carpeta `frontend`.
2. Ejecuta `npx create-vite@latest .` para inicializar un proyecto Vite.
3. Luego, ejecuta `npm install` para instalar las dependencias de React y Vite.
4. Ejecuta `npm install axios` para instalar la dependencia Axios que se utilizará en el frontend.
5. Ejecuta `npm run dev` para iniciar la aplicación de React con Vite.

### Carpeta del Proyecto

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta `npm install axios.` para descargar e instalar Axios y añadirló como una dependencia en tu archivo.

## Uso

1. Accede a la aplicación en tu navegador usando la URL proporcionada por Vite, generalmente `http://localhost:3000`.
2. En la pantalla de bienvenida, ingresa el nombre del maestro y haz clic en "Enter".
3. Si es la primera vez que ingresaste, serás redirigido a la página de creación de evaluación. De lo contrario, verás la página con las opciones de "Crear Nueva Evaluación" y "Mis Evaluaciones".
4. Para crear una nueva evaluación, ingresa el título, las preguntas y las opciones de respuesta. Luego, haz clic en "Create Evaluation".

## Estructura del Proyecto

- `backend`: Contiene el servidor Express y las rutas para manejar las solicitudes.
- `database`: Almacena archivos de datos simulados para perros, adoptantes y adopciones.
- `frontend`: La interfaz de usuario de la aplicación React construida con Vite.

## Tecnologías Utilizadas

- Frontend: React con Vite.
- Backend: Node.js con Express.
- Base de Datos: Datos simulados almacenados en archivos JSON.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras errores o mejoras posibles, ¡no dudes en abrir un problema o enviar una solicitud de extracción!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
