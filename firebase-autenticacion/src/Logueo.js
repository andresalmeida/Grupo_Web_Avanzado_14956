import React from "react";
import { app } from "./fb";
import "./Logueo.css"; // Importar estilos CSS

const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);
  const [error, setError] = React.useState(null);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("Usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      })
      .catch((error) => {
        setError("No se pudo crear la cuenta. Inténtalo de nuevo.");
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("Sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      })
      .catch((error) => {
        setError("No se pudo iniciar sesión. Ingrese un correo valida y una contraseña de al menos 6 caracteres.");
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    setError(null); // Limpiar el mensaje de error

    if (isRegistrando) {
      crearUsuario(correo, password);
    } else {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div className="container">
      <h1 className="title">{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
      {error && <p className="error">{error}</p>} {/* Mostrar el mensaje de error si hay uno */}
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField">Correo</label>
        <input type="email" id="emailField" />
        <label htmlFor="passwordField">Contraseña</label>
        <input type="password" id="passwordField" />
        <button type="submit" className="submitButton">
          {isRegistrando ? "Regístrate" : "Inicia sesión"}
        </button>
      </form>
      <button onClick={() => setIsRegistrando(!isRegistrando)} className="toggleButton">
        {isRegistrando
          ? "¿Ya tienes cuenta? ¡Inicia sesión"
          : "¿No tienes cuenta? ¡Regístrate gratis!"}
      </button>
    </div>
  );
};

export default Logueo;
