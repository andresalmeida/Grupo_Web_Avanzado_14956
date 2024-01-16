# Plantilla de Celulares con MVC

Este proyecto es una plantilla de sitio web para una tienda de celulares, implementada utilizando el patrón de diseño Modelo-Vista-Controlador (MVC).

## Estructura del Proyecto

- **index.html:** Contiene la estructura HTML del sitio, incluyendo las secciones de navegación, información sobre la empresa y el formulario de contacto.

- **css/:** Carpeta que contiene los estilos CSS para dar formato al sitio.

- **js/:** Carpeta que contiene el archivo `script.js` donde se implementa el patrón MVC.

## Patrón MVC

El patrón Modelo-Vista-Controlador se utiliza para organizar y estructurar el código de manera modular. Aquí está cómo se implementa en este proyecto:

### Modelo (`script.js`)

- **ContactoModelo:** Define la estructura de datos relacionada con el formulario de contacto, incluyendo propiedades como `nombre`, `correo`, `telefono`, `mensaje`, etc.

### Vista (`script.js`)

- **ContactoVista:** Encargada de actualizar la interfaz de usuario (HTML) según los cambios en el modelo. Por ejemplo, muestra los datos del modelo en los campos del formulario.

### Controlador (`script.js`)

- **ContactoControlador:** Maneja las interacciones del usuario y actualiza el modelo y la vista según sea necesario. Por ejemplo, al hacer clic en el botón "Enviar Mensaje", se actualiza el modelo y se muestra un modal con los detalles del mensaje.

## Uso

1. Clona el repositorio: `git clone https://github.com/andresalmeida/Grupo_Web_Avanzado_14956.git`

2. Abre `index.html` en tu navegador favorito.

3. Explora las diferentes secciones del sitio y utiliza el formulario de contacto para familiarizarte con la interacción entre el modelo, la vista y el controlador.

## Personalización

Siéntete libre de personalizar este proyecto según tus necesidades. Puedes agregar más funcionalidades al modelo, ajustar el diseño en el archivo CSS y expandir las funciones del controlador.

## Tecnologías Utilizadas

- HTML5
- CSS3 (Bootstrap)
- JavaScript (jQuery)

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras problemas o mejoras posibles, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado por GRUPO8 - Grupo_Web_Avanzado_14956**
