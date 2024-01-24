// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import UserData from '../data/UserData';

const UserProfile = () => {
  const [userId, setUserId] = useState(1); // Estado para almacenar el ID del usuario a mostrar
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await UserData.getUserInfo(userId);
        setUserInfo(data);
      } catch (error) {
        console.error('Error al obtener información del usuario:', error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleUserChange = (newUserId) => {
    setUserId(newUserId);
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div>
        <label htmlFor="userId">Seleccionar Usuario:</label>
        <select id="userId" value={userId} onChange={(e) => handleUserChange(Number(e.target.value))}>
          <option value={1}>Usuario 1</option>
          <option value={2}>Usuario 2</option>
          {/* Puedes agregar más opciones según sea necesario */}
        </select>
      </div>
      {userInfo ? (
        <div>
          <p>Nombre: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Dirección: {userInfo.address.street}, {userInfo.address.city} ({userInfo.address.zipCode})</p>
          <p>Teléfono: {userInfo.phone}</p>
          <p>Sitio web: {userInfo.website}</p>
          <p>Empresa: {userInfo.company.name} - {userInfo.company.catchPhrase}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default UserProfile;
