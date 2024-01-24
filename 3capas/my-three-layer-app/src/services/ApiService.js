// src/services/ApiService.js
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Utilizamos un servicio de prueba para obtener datos ficticios.

const ApiService = {
  async fetchData(endpoint) {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error;
    }
  },
};

export default ApiService;
