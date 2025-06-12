import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ElementoList from './components/ElementoList';
import LibroList from './components/libroList';
import LibroForm from './components/libroForm';
import DVDList from './components/DVDList';
import RevistaList from './components/RevistaList';
import DVDForm from "./components/DVDForm.jsx";
import RevistaForm from "./components/RevistaForm.jsx";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const handleLoginSuccess = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            setUser(decoded);
            sessionStorage.setItem('user', JSON.stringify(decoded));
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    };

    const handleLogout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return (
        <>
            <Navbar user={user} onLogout={handleLogout} />
            <div className="container mt-3">
                {!user ? (
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => console.log('Login Failed')}
                    />
                ) : null}

                <Routes>
                    {/* Ruta pública */}
                    <Route path="/" element={<ElementoList />} />

                    {/* Rutas privadas */}
                    <Route
                        path="/libros"
                        element={
                            <PrivateRoute user={user}>
                                <LibroList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/libros/nuevo"
                        element={
                            <PrivateRoute user={user}>
                                <LibroForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/libros/editar/:id"
                        element={
                            <PrivateRoute user={user}>
                                <LibroForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dvds"
                        element={
                            <PrivateRoute user={user}>
                                <DVDList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dvds/nuevo"
                        element={
                            <PrivateRoute user={user}>
                                <DVDForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dvds/editar/:id"
                        element={
                            <PrivateRoute user={user}>
                                <DVDForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/revistas"
                        element={
                            <PrivateRoute user={user}>
                                <RevistaList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/revistas/nuevo"
                        element={
                            <PrivateRoute user={user}>
                                <RevistaForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/revistas/editar/:id"
                        element={
                            <PrivateRoute user={user}>
                                <RevistaForm />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </>
    );
};

export default App;
