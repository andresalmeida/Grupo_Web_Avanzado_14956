# Evaluación Intermedia App

Esta aplicación web está diseñada para ser un registro de inventario.
## Instalación

La aplicación está dividida en dos carpetas principales: `backend` y `frontend`. A continuación se detallan los pasos para instalar cada componente.

### Backend

1. Abre una terminal en la carpeta `backend`.
2. Ejecuta `npm i`.
3. Luego, ejecuta `npm run backend` para iniciar el servidor.
4. Crea un archivo llamado `.env` en la carpeta `backend` y agregamos el código que contiene las credenciales de nuestro Mongo Atlas.
   ```bash
   MONGO_URI=mongodb+srv://dacranel:winbiz1995a132a@cluster0.nszcla1.mongodb.net/proyecto_inventario?retryWrites=true&w=majority
   NODE_ENV=development
   JWT_SECRET=darwin1234

   CLOUDINARY_CLOUD_NAME=dxfzqun74
   CLOUDINARY_API_KEY=197174332884282
   CLOUDINARY_API_SECRET=J2UrgRu9ORynT_mTagk49l-nqWA
   ```

### Frontend

1. Abre una terminal en la carpeta `frontend`.
2. Ejecuta `npm i .` para instalar las dependencias de React.
3. Ejecuta `npm install --global windows-build-tools`.
4. Ejecuta `npm install node-sass@latest`.
5. Importante verificar que Vite se instale usando como framework React > JavaScript.
6. Ejecuta `npm run start` para iniciar la aplicación de React.

## Uso

1. Accede a la aplicación en tu navegador usando la URL proporcionada por Vite, generalmente `http://localhost:3000`.
2. En la pantalla de bienvenida, registrate".
3. Si es la primera vez que ingresaste, serás redirigido a la página de inicio sin tener inventario.

## Estructura del Proyecto

- `backend`: Contiene el servidor y las rutas para manejar las solicitudes.
- `frontend`: La interfaz de usuario de la aplicación React.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras errores o mejoras posibles, ¡no dudes en abrir un problema o enviar una solicitud de extracción!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
