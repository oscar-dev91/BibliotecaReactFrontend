import axios from 'axios';

const API_URL = 'http://localhost:8080/api/revistas';

export const obtenerRevistas = () => axios.get(API_URL);

export const obtenerRevista = (id) => axios.get(`${API_URL}/${id}`);

export const crearRevista = (revista) => axios.post(API_URL, revista);

export const actualizarRevista = (id, revista) => axios.put(`${API_URL}/${id}`, revista);

export const eliminarRevista = (id) => axios.delete(`${API_URL}/${id}`);

export const buscarRevistasPorTitulo = (titulo) =>
    axios.get(`${API_URL}/buscar/titulo`, { params: { titulo } });

export const buscarRevistasPorAutor = (autor) =>
    axios.get(`${API_URL}/buscar/autor`, { params: { autor } });

export const buscarRevistasPorCategoria = (categoria) =>
    axios.get(`${API_URL}/buscar/categoria`, { params: { categoria } });
