import axios from 'axios';

const API_URL = 'http://localhost:8080/api/libros'; // Cambia si es otro puerto

export const obtenerLibros = () => axios.get(API_URL);

export const obtenerLibro = (id) => axios.get(`${API_URL}/${id}`);

export const crearLibro = (libro) => axios.post(API_URL, libro);

export const actualizarLibro = (id, libro) => axios.put(`${API_URL}/${id}`, libro);

export const eliminarLibro = (id) => axios.delete(`${API_URL}/${id}`);

export const buscarLibros = (params) => axios.get(`${API_URL}/buscar`, { params });
