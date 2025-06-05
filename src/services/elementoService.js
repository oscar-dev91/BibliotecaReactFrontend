import axios from 'axios';

const API_URL = 'http://localhost:8080/api/elementos';

export const obtenerElementos = () => axios.get(API_URL);
export const buscarElementosPorTitulo = (titulo) =>
    axios.get(`${API_URL}/buscar`, {
        params: { titulo }
    });
