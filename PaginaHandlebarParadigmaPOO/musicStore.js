// musicStore.js

class MusicStore {
    constructor() {
        this.title = "Bienvenido a la Tienda de Música";
        this.description = "Descubre los mejores álbumes y accesorios musicales.";
        this.products = [
            {
                name: "1989 Taylor's Version Vinilo",
                artist: "Taylor Swift",
                image: "Imagenes/1989vinyl.webp",
                price: "$31,89"
            },
            {
                name: "Nine CD",
                artist: "Blink182",
                image: "Imagenes/nine.jpeg",
                price: "$9,90"
            },
            {
                name: "Starboy Descarga Digital",
                artist: "The Weeknd",
                image: "Imagenes/starboydigital.webp",
                price: "$14"
            },
            {
                name: "Audífonos Beats Studio Pro",
                artist: "",
                image: "Imagenes/beats.jpg",
                price: "$349"
            },
            {
                name: "Mañana Será Bonito (Bichota Season)",
                artist: "Karol G",
                image: "Imagenes/msb.jpg",
                price: "$14"
            }
        ];
    }

    renderHeader() {
        // Renderiza el encabezado con Handlebars
        var source = document.getElementById("mi-template").innerHTML;
        var template = Handlebars.compile(source);
        var data = {
            titulo: this.title,
            descripcion: this.description
        };
        document.body.innerHTML = template(data);
    }

    renderProducts() {
        // Renderiza la sección de productos con Handlebars
        var source = document.getElementById("mi-template-productos").innerHTML;
        var template = Handlebars.compile(source);
        var data = {
            productos: this.products
        };
        document.querySelector(".destacados").innerHTML = template(data);
    }
}

// Crear una instancia de la clase MusicStore
const myMusicStore = new MusicStore();
myMusicStore.renderHeader();
myMusicStore.renderProducts();
