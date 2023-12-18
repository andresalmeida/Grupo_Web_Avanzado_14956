# Proyecto ASP.NET Core con Patrón MVC y Autenticación JWT

Este proyecto se centra en la implementación de una API RESTful utilizando ASP.NET Core con el patrón de diseño Modelo-Vista-Controlador (MVC) y autenticación basada en tokens JWT.

## Configuración del Proyecto

Para configurar el proyecto:

1. Clona este repositorio.
2. Abre el proyecto en tu entorno de desarrollo preferido.
3. Asegúrate de tener instalado .NET Core 7.0.
4. Configura la base de datos (si es necesario) en el archivo `appsettings.json`.
5. Ejecuta el proyecto y verifica que funcione correctamente.

## Autenticación JWT

El middleware de autenticación está configurado para utilizar tokens JWT. Asegúrate de seguir las prácticas de seguridad al trabajar con estos tokens y valida adecuadamente su emisión, caducidad y autenticidad.

## Implementación de la API RESTful

### Controladores CRUD

Se han desarrollado al menos dos controladores que manejan operaciones CRUD para entidades específicas. Los controladores han sido diseñados siguiendo el patrón MVC y se han utilizado atributos como `[Authorize]` para asegurar que las operaciones requieran autenticación.

### Seguridad y Middleware Personalizado

Hemos implementado middleware personalizado para registrar las solicitudes a la API antes y después del procesamiento. Este middleware registra información útil para el análisis y monitoreo de las solicitudes.

Además, se ha explorado la configuración de políticas de autorización para controlar el acceso a recursos específicos, asegurando que solo usuarios autorizados puedan acceder a ciertas partes de la API.

## Documentación de la API

La documentación de la API se encuentra detallada a continuación:

### Endpoints Disponibles

- **/api/Paises**
  - Método: GET
  - Descripción: Obtiene información de la entidad 1.
  - Autenticación requerida: Sí

- **/api/Paises/{id}**
  - Método: GET, PUT, DELETE
  - Descripción: Obtiene, actualiza o elimina información de la entidad 1 por su ID.
  - Autenticación requerida: Sí

- **/api/Paises**
  - Método: GET, POST
  - Descripción: Gestiona entidades de la ruta 2.
  - Autenticación requerida: Sí

### Requisitos de Autenticación

Se requiere autenticación mediante el envío de un token JWT válido en el encabezado de la solicitud para acceder a todos los endpoints de la API.
