const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors()); // Habilita CORS

// Información ficticia sobre el equipo y la dirección
const equipo = [
    {
        nombre: 'Ana García',
        rol: 'CEO',
        caracteristicas: 'Experta en estrategias de negocios y liderazgo.',
        foto: 'https://img1.freepng.es/20190610/grb/kisspng-person-silhouette-clip-art-computer-icons-vector-g-2977-png-and-svg-in-use-icons-for-free-download-u-5cfe8425611950.3008281115601838453977.jpg', // Reemplazar con la URL real de la foto
    },
    {
        nombre: 'Carlos Martínez',
        rol: 'Desarrollador Principal',
        caracteristicas: 'Apasionado por la tecnología y experto en desarrollo web.',
        foto: 'https://img1.freepng.es/20190610/grb/kisspng-person-silhouette-clip-art-computer-icons-vector-g-2977-png-and-svg-in-use-icons-for-free-download-u-5cfe8425611950.3008281115601838453977.jpg', // Reemplazar con la URL real de la foto
    },
    {
        nombre: 'Elena Rodríguez',
        rol: 'Diseñadora de UX/UI',
        caracteristicas: 'Creativa y enfocada en proporcionar experiencias visuales atractivas.',
        foto: 'https://img1.freepng.es/20190610/grb/kisspng-person-silhouette-clip-art-computer-icons-vector-g-2977-png-and-svg-in-use-icons-for-free-download-u-5cfe8425611950.3008281115601838453977.jpg', // Reemplazar con la URL real de la foto
    },
];

const direccion = {
    calle: 'Avenida Innovación, 123',
    ciudad: 'Ciudad Tecnológica',
    codigoPostal: '12345',
    pais: 'Ficcionlandia',
    mapa: 'https://tienda.nanmagazine.com/wp-content/uploads/2020/12/nan29-map-quito-final_out_Page_1.jpg', // Reemplazar con la URL real de un mapa
};

// Ruta para la página "Acerca de Nosotros"
app.get('/', (req, res) => {
    // Contenido HTML para la página "Acerca de Nosotros"
    const htmlContent = `
        <html>
            <head>
            <div class="text-center">
            <div id="root"></div>
            <script type="module" src="/src/app.jsx"></script>
            <div>
            <button onclick="window.location.href='http://127.0.0.1:5500/proyecto-microservicios-main/cliente-microservicios/index.html'">Regresar</button>
            </div>
          </div>
                <title>Acerca de Nosotros</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    h1 {
                        color: #333;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    .miembro img {
                        max-width: 100px;
                        max-height: 100px;
                        margin-right: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>Acerca de Nosotros</h1>

                <h2>Nuestro Equipo</h2>
                <table>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Características</th>
                    </tr>
                    ${equipo.map((miembro) => `
                        <tr class="miembro">
                            <td><img src="${miembro.foto}" alt="${miembro.nombre}"></td>
                            <td>${miembro.nombre}</td>
                            <td>${miembro.rol}</td>
                            <td>${miembro.caracteristicas}</td>
                        </tr>
                    `).join('')}
                </table>

                <h2>Nuestra Dirección</h2>
                <p><strong>Dirección:</strong> ${direccion.calle}, ${direccion.ciudad}, ${direccion.codigoPostal}, ${direccion.pais}</p>
                <img src="${direccion.mapa}" alt="Mapa de nuestra ubicación">

            </body>
        </html>
    `;

    // Envia la respuesta con el contenido HTML
    res.send(htmlContent);
});

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
