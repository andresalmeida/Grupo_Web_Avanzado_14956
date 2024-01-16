// script.js

// Modelo
class ContactoModelo {
    constructor() {
      this.nombre = "";
      this.correo = "";
      this.telefono = "";
      this.mensaje = "";
    }
  }
  
  const modelo = new ContactoModelo();
  
  // Vista
  class ContactoVista {
    actualizarVista() {
      document.getElementById("nombre").value = modelo.nombre;
      document.getElementById("correo").value = modelo.correo;
      document.getElementById("telefono").value = modelo.telefono;
      document.getElementById("mensaje").value = modelo.mensaje;
    }
  }
  
  const vista = new ContactoVista();
  
  // Controlador
  class ContactoControlador {
    actualizarModelo() {
      modelo.nombre = document.getElementById("nombre").value;
      modelo.correo = document.getElementById("correo").value;
      modelo.telefono = document.getElementById("telefono").value;
      modelo.mensaje = document.getElementById("mensaje").value;
    }
  
    enviarMensaje() {
        this.actualizarModelo();
        // Aquí puedes agregar lógica para enviar el mensaje, por ejemplo, una petición AJAX.

        // Muestra el modal con los detalles del mensaje
        const detalleMensaje = JSON.stringify(modelo, null, 2); // Indentación bonita
        document.getElementById("detalleMensaje").innerText = detalleMensaje;
        $('#mensajeEnviadoModal').modal('show');
    }
}

const controlador = new ContactoControlador();