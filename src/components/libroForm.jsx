import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { crearLibro, obtenerLibro, actualizarLibro } from '../services/libroService';

const LibroForm = () => {
    const [libro, setLibro] = useState({
        titulo: '',
        autor: '',
        anoPublicacion: '',
        isbn: '',
        numeroPaginas: '',
        genero: '',
        editorial: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            obtenerLibro(id).then(res => setLibro(res.data));
        }
    }, [id]);

    const handleChange = (e) => {
        setLibro({ ...libro, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await actualizarLibro(id, libro);
        } else {
            await crearLibro(libro);
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="titulo" placeholder="Título" value={libro.titulo} onChange={handleChange} />
            <input name="autor" placeholder="Autor" value={libro.autor} onChange={handleChange} />
            <input name="anoPublicacion" type="number" placeholder="Año" value={libro.anoPublicacion} onChange={handleChange} />
            <input name="isbn" placeholder="ISBN" value={libro.isbn} onChange={handleChange} />
            <input name="numeroPaginas" type="number" placeholder="Páginas" value={libro.numeroPaginas} onChange={handleChange} />
            <input name="genero" placeholder="Género" value={libro.genero} onChange={handleChange} />
            <input name="editorial" placeholder="Editorial" value={libro.editorial} onChange={handleChange} />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default LibroForm;
