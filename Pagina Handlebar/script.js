document.addEventListener("DOMContentLoaded", function () {
    var source = document.getElementById("mi-template").innerHTML;
    var template = Handlebars.compile(source);

    var data = {
        titulo: "Bienvenido a la Tienda de Música",
        descripcion: "Descubre los mejores álbumes y accesorios musicales."
    };

    document.body.innerHTML = template(data);
});




