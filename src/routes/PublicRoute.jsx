// src/routes/PublicRoute.jsx
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('loggedUser'));

    // Si hay un usuario logueado, redirigir al perfil
    return user ? <Navigate to="/perfil" /> : children;
}

export default PublicRoute;
