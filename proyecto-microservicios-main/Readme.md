# Proyecto de Microservicios

Este proyecto sirve como ejemplo de la creación de dos microservicios que se comunican entre sí.

## Microservicio 1

El Microservicio 1 se encuentra en la carpeta `microservicio1` y se ejecuta en el puerto 3001. Este microservicio recibe solicitudes HTTP y las procesa.

El archivo principal es `servicio.js`, que inicia un servidor Express y define varias rutas ademas de contrar con la opcion de teléfonos celulares de mi tienda .

## Microservicio 2

El Microservicio 2 se encuentra en la carpeta `microservicio2` y se ejecuta en el puerto 3002. Este microservicio muestra la parte de acerca de nosotros de la pagina web.

Al igual que el Microservicio 1, el archivo principal es `servicio.js`.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal:

```bash
npm i
```

## Ejecución

Para iniciar los microservicios, navega a la carpeta de cliente-microservicios y ejecuta:

```bash
npm install -g live-server
```

```bash
live-server
```

De esa manera se podra navegar de una mejor manera por la pagina web.
En caso de existir errores, inicia cada microservicio en terminales separadas con el comando `node servicio.js`

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- `express`: Un marco de aplicación web para Node.js
- `axios`: Un cliente HTTP basado en promesas para el navegador y Node.js
- `nodemon`: Una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.
- `concurrently`: Una herramienta para ejecutar múltiples comandos npm concurrentemente. Es útil cuando se tienen múltiples servidores o tareas que se quieren ejecutar al mismo tiempo.
