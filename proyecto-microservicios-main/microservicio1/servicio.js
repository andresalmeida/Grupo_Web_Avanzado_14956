const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors()); // Habilita CORS

// Base de datos simulada de teléfonos
const telefonos = {
    iphoneX: {
        nombre: 'iPhone X',
        imagen: 'https://w7.pngwing.com/pngs/674/742/png-transparent-iphone-x-front-iphone-x-apple-x-thumbnail.png',
        descripcion: 'Pantalla Super Retina de 5.8 pulgadas, cámara dual de 12 MP, Face ID, etc.',
    },
    galaxyS21: {
        nombre: 'Samsung Galaxy S21',
        imagen: 'https://www.teknofilo.com/wp-content/uploads/2020/12/Samsung-Galaxy-S21-2.jpg',
        descripcion: 'Pantalla Dynamic AMOLED de 6.2 pulgadas, cámara triple de 12+12+64 MP, 5G, etc.',
    },
};

app.get('/', (req, res) => {
    // Contenido HTML para una tienda de celulares
    const htmlContent = `
        <html>
        <div class="text-center">
            <div id="root"></div>
            <script type="module" src="/src/app.jsx"></script>
            <div>
              <button onclick="window.location.href='http://127.0.0.1:5500/cliente-microservicios/index.html'">Regresar</button>
            </div>
          </div>
            <head>
                <title>Tienda de Celulares</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    h1 {
                        color: #333;
                    }
                    .phone {
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>Bienvenido a la Tienda de Celulares</h1>

                <div class="phone">
                    <h2>iPhone X</h2>
                    <img src="${telefonos.iphoneX.imagen}" alt="${telefonos.iphoneX.nombre}">
                    <p>${telefonos.iphoneX.descripcion}</p>
                </div>

                <div class="phone">
                    <h2>Samsung Galaxy S21</h2>
                    <img src="${telefonos.galaxyS21.imagen}" alt="${telefonos.galaxyS21.nombre}">
                    <p>${telefonos.galaxyS21.descripcion}</p>
                </div>

                <!-- Puedes agregar más información sobre otros teléfonos -->

            </body>
        </html>
    `;

    // Envia la respuesta con el contenido HTML
    res.send(htmlContent);
});

// Ruta dinámica para obtener detalles de un teléfono específico
app.get('/telefono', (req, res) => {
    const telefonoId = req.query.id;

    if (telefonoId && telefonos[telefonoId]) {
        const telefono = telefonos[telefonoId];

        // Devuelve los detalles del teléfono en formato JSON
        res.json({
            nombre: telefono.nombre,
            imagen: telefono.imagen,
            descripcion: telefono.descripcion,
        });
    } else {
        // Devuelve un mensaje de error si el teléfono no se encuentra
        res.status(404).json({ error: 'Teléfono no encontrado' });
    }
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
