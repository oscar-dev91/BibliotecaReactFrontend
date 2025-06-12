import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <NavLink className="navbar-brand fw-bold" to="/">Biblioteca</NavLink>
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/">Todos los elementos</NavLink>
                <NavLink className="nav-link" to="/libros">Libros</NavLink>
                <NavLink className="nav-link" to="/dvds">DVDs</NavLink>
                <NavLink className="nav-link" to="/revistas">Revistas</NavLink>
            </div>
            <div className="ms-auto">
                {user && (
                    <div className="d-flex align-items-center">
                        <span className="me-2">{user.name}</span>
                        <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
