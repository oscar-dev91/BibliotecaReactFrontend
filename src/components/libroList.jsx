import React, { useEffect, useState } from 'react';
import { obtenerLibros, eliminarLibro } from '../services/libroService';
import { Link } from 'react-router-dom';

const LibroList = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        cargarLibros();
    }, []);

    const cargarLibros = async () => {
        const response = await obtenerLibros();
        setLibros(response.data);
    };

    const borrarLibro = async (id) => {
        await eliminarLibro(id);
        cargarLibros();
    };

    return (
        <div>
            <Link to="/nuevo">Agregar Libro</Link>
            <table border="1">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Año</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {libros.map((libro) => (
                    <tr key={libro.id}>
                        <td>{libro.titulo}</td>
                        <td>{libro.autor}</td>
                        <td>{libro.anoPublicacion}</td>
                        <td>
                            <Link to={`/libro/${libro.id}`}>Ver</Link> |{' '}
                            <Link to={`/editar/${libro.id}`}>Editar</Link> |{' '}
                            <button onClick={() => borrarLibro(libro.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LibroList;
