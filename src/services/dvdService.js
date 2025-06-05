import axios from 'axios';

const API_URL = 'http://localhost:8080/api/dvds'; // Cambia si es otro puerto o endpoint

export const obtenerDVDs = () => axios.get(API_URL);

export const obtenerDVD = (id) => axios.get(`${API_URL}/${id}`);

export const crearDVD = (dvd) => axios.post(API_URL, dvd);

export const actualizarDVD = (id, dvd) => axios.put(`${API_URL}/${id}`, dvd);

export const eliminarDVD = (id) => axios.delete(`${API_URL}/${id}`);

export const buscarDVDs = (params) => axios.get(`${API_URL}/buscar`, { params });
