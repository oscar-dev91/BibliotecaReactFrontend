import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerLibro } from '../services/libroService';

const LibroDetail = () => {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);

    useEffect(() => {
        obtenerLibro(id).then(res => setLibro(res.data));
    }, [id]);

    if (!libro) return <p>Cargando...</p>;

    return (
        <div>
            <h2>{libro.titulo}</h2>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>Año:</strong> {libro.anoPublicacion}</p>
            <p><strong>ISBN:</strong> {libro.isbn}</p>
            <p><strong>Páginas:</strong> {libro.numeroPaginas}</p>
            <p><strong>Género:</strong> {libro.genero}</p>
            <p><strong>Editorial:</strong> {libro.editorial}</p>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default LibroDetail;
