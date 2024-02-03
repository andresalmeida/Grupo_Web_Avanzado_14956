# Autenticación de Usuario mediante Supabase

Esta tarea es una práctica simple y sencilla de una autenticación de usuario utilizando Firebase y la herramienta GitHub. Consiste en una página web con una única pantalla de inicio en la que los usuarios deben presionar un botón para iniciar sesión. Una vez iniciada la sesión, se redirige al usuario a la API generada con la ayuda de Firebase y GitHub, y se mantendrá la sesión iniciada.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Asegúrate de tener Node.js y npm instalados en tu sistema.

2. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```
3. Navega hasta el directorio del proyecto:
   
   ```bash
   cd nombre-del-repositorio
   ```
4. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```
## Uso

Sigue estos pasos para ejecutar el proyecto:

1. Inicia la aplicación en modo de desarrollo:

   ```bash
   npm start
   ```
2. Abre tu navegador web y ve a la siguiente dirección:

   ```bash
   http://localhost:3000
   ```
3. En la pantalla de inicio, haz clic en el botón de inicio de sesión.
4. Serás redirigido a la API generada con Firebase y GitHub para autenticarte.
5. Una vez autenticado, estarás logueado en la aplicación.

## Implementación de la Autenticación

Se utilizaron herramientas para mejorar la seguridad y la experiencia de autenticación, como el uso de tokens JWT (JSON Web Tokens) para la autenticación basada en tokens o la integración con proveedores de autenticación externos como GitHub.

Algunas características clave de la implementación de la autenticación incluyen:

- Registro de usuarios: Los usuarios pueden registrarse en la aplicación proporcionando su información de registro, como nombre de usuario y contraseña.
- Inicio de sesión de usuarios: Los usuarios pueden iniciar sesión en la aplicación utilizando sus credenciales registradas.
- Protección de rutas: Se implementó un sistema de protección de rutas para restringir el acceso a ciertas páginas o funcionalidades solo a los usuarios autenticados.
- Cierre de sesión: Los usuarios pueden cerrar sesión en la aplicación para finalizar su sesión actual.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras errores o mejoras posibles, ¡no dudes en abrir un problema o enviar una solicitud de extracción!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
















