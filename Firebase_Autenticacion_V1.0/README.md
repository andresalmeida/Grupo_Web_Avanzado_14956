
## Autenticacion con Firebase

Este proyecto utiliza Firebase para la autenticación de usuarios. Firebase ofrece una plataforma completa de desarrollo de aplicaciones móviles y web que incluye una amplia gama de servicios, incluida la autenticación de usuarios.

### Configuración de Firebase

Para usar la autenticación con Firebase en este proyecto, primero debes configurar tu proyecto en la consola de Firebase:

1. Crea un proyecto en la [Consola de Firebase](https://console.firebase.google.com/).
2. Haz clic en el botón "Agregar proyecto" y sigue las instrucciones para configurar tu proyecto.
3. Habilita la autenticación por correo electrónico/password u otros proveedores de autenticación que desees utilizar en la sección "Autenticación" de la consola de Firebase.
4. Copia las credenciales de tu proyecto (ID de la aplicación, clave de API, etc.) desde la configuración de tu proyecto en la consola de Firebase.

### Integración con React

Este proyecto utiliza la biblioteca `firebase` para interactuar con Firebase desde la aplicación React. Asegúrate de instalar Firebase y configurarlo en tu aplicación de React según las instrucciones proporcionadas en la [documentación de Firebase para la web](https://firebase.google.com/docs/web/setup).

Una vez que hayas configurado Firebase en tu aplicación de React, podrás utilizar sus métodos y servicios para manejar la autenticación de usuarios.

### Uso en el Proyecto

El componente `Logueo` de este proyecto utiliza la autenticación con Firebase para permitir que los usuarios inicien sesión y se registren en la aplicación. Puedes encontrar más detalles sobre cómo se implementa la autenticación en este componente en su respectivo archivo y en la documentación de Firebase.

En este caso, se ha configurado Firebase en una sola maquina, asi que, ya existe una persona que puede manejar esta autenticacion, por lo que 

En el directorio del proyecto, puedes ejecutar:

### `npm install`

Instala las dependencias necesarias para ejecutar la aplicación.\
Debes ejecutar este comando antes de iniciar la aplicación por primera vez.

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

