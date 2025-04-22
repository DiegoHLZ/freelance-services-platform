// src/pages/ProfilePage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Obtener usuario logueado
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

        if (!loggedUser) {
            // Si no hay sesión activa, redirigir a login
            navigate('/login');
        } else {
            setUser(loggedUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('loggedUser');
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="profile-container">
            <h1>Bienvenido, {user.name} 👋</h1>
            <p><strong>Correo:</strong> {user.email}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default ProfilePage;