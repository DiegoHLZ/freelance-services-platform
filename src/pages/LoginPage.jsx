// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/_login.scss';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtener usuarios desde localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar si el usuario existe
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (foundUser) {
            // Guardar sesión activa (opcional)
            localStorage.setItem('loggedUser', JSON.stringify(foundUser));

            alert('✅ Inicio de sesión exitoso');
            navigate('/perfil');
        } else {
            alert('❌ Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
            <p>¿No tienes cuenta? <span onClick={() => navigate('/registro')}>Regístrate</span></p>
        </div>
    );
}

export default LoginPage;
