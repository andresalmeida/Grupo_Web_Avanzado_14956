import React from "react";
import { app } from "./fb";
import "./Home.css"; // Importar estilos CSS

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="home-container">
      <h1 className="title">Bienvenido, sesión iniciada.</h1>
      <button className="logout-button" onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
