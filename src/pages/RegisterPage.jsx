// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/_register.scss';

function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert('❌ Las contraseñas no coinciden');
            return;
        }

        // Obtener usuarios guardados
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar si ya existe el correo
        const emailExists = existingUsers.some(user => user.email === email);
        if (emailExists) {
            alert('⚠️ Este correo ya está registrado');
            return;
        }

        // Guardar nuevo usuario
        const newUser = { name, email, password };
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        alert('✅ Registro exitoso');
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h2>Crear cuenta</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
            <p>¿Ya tienes cuenta? <span onClick={() => navigate('/login')}>Inicia sesión</span></p>
        </div>
    );
}

export default RegisterPage;
