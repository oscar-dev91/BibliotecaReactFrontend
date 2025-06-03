import { Routes, Route } from 'react-router-dom';
import LibroList from './components/libroList.jsx';
import LibroForm from './components/LibroForm';
import LibroDetail from './components/LibroDetail';

function App() {
    return (
        <div className="container">
            <h1>Biblioteca</h1>
            <Routes>
                <Route path="/" element={<LibroList />} />
                <Route path="/nuevo" element={<LibroForm />} />
                <Route path="/editar/:id" element={<LibroForm />} />
                <Route path="/libro/:id" element={<LibroDetail />} />
            </Routes>
        </div>
    );
}

export default App;
