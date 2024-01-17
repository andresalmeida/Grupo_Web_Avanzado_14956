# TechBeats - Tienda de Música Online

¡Bienvenido a TechBeats, tu destino musical favorito! Descubre la mejor música del mundo y accesorios que complementarán tu pasión por el sonido.

## Contenido

1. [Visión General](#visión-general)
2. [Funcionalidades](#funcionalidades)
3. [Cómo Usar](#cómo-usar)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Licencia](#licencia)

## Visión General

TechBeats es una tienda de música en línea que se esfuerza por proporcionar acceso a la mejor música de todo el mundo. Desde álbumes populares hasta accesorios de alta calidad, TechBeats está diseñado para satisfacer las necesidades de los amantes de la música más apasionados.

## Funcionalidades

- **Introducción Atractiva:** La página principal incluye una sección de introducción que destaca la misión y valores de TechBeats.

- **Playlist Destacada:** Descubre la playlist de nuestro artista más vendido en el 2023 directamente desde la página principal.

- **Productos Destacados:** Explora una cuidadosa selección de productos destacados, desde vinilos y CDs hasta accesorios modernos como audífonos de alta calidad.

- **Renderizado Dinámico con Handlebars:** La página utiliza Handlebars para dinámicamente renderizar el título y los productos destacados, simplificando la gestión del contenido.

## Cómo Usar

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/andresalmeida/Grupo_Web_Avanzado_14956/new/main/Pagina%20Handlebar
   ```
2. **Abre el archivo HTML**
   Abre el archivo index.html en tu navegador web preferido.
3. **Explora la tienda**
   Navega a través de la tienda, descubre productos destacados y sumérgete en la experiencia musical.

## Link Directo a la Página en Github Pages
https://andresalmeida.github.io/Grupo_Web_Avanzado_14956/Pagina%20Handlebar/

## Tecnologías Utilizadas

- HTML5 y CSS3 para la estructura y diseño de la página.
- JavaScript para la lógica y manipulación del DOM.
- Handlebars para el renderizado dinámico y simplificación del código HTML.

## CREACIÓN DE CLASE EN JAVASCRIPT

La clase `MusicStore` encapsula la lógica de la tienda de música. Aquí hay una descripción detallada:

### Propiedades:

- `title`: Representa el título de la tienda.
- `description`: Contiene la descripción de la tienda.
- `products`: Almacena información sobre los productos disponibles.

### Métodos:

1. **`constructor()`:**
   - Inicializa las propiedades de la clase con valores predeterminados.
   
2. **`renderHeader()`:**
   - Utiliza Handlebars para renderizar dinámicamente el encabezado de la página.
   - Toma el contenido del template con el id "mi-template", compila la plantilla y actualiza el contenido del cuerpo del documento HTML con los datos de la instancia.

3. **`renderProducts()`:**
   - Similar a `renderHeader`, pero se enfoca en la sección de productos.
   - Utiliza el template con el id "mi-template-productos" para renderizar la información de los productos en la página.

## Uso de Instancias

```javascript
// Crear una instancia de la clase MusicStore
const myMusicStore = new MusicStore();
```

```
// Llamar a los métodos de la instancia para renderizar la información
myMusicStore.renderHeader();
myMusicStore.renderProducts();
```
### Instanciación:
- Se crea una nueva instancia de la clase MusicStore mediante const myMusicStore = new MusicStore();.
- La instancia (myMusicStore) contiene todas las propiedades y métodos definidos en la clase.
  
### Llamadas a Métodos:

Llama al método renderHeader de la instancia, que actualiza dinámicamente el encabezado de la página.
```
myMusicStore.renderHeader();
```
Llama al método renderProducts, que actualiza dinámicamente la sección de productos en la página.
```
myMusicStore.renderProducts();
```


