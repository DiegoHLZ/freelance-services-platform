// src/routes/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ServicesPage from '../pages/ServicesPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            {/* Rutas públicas solo si NO estás logueado */}
            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />
            <Route path="/registro" element={
                <PublicRoute>
                    <RegisterPage />
                </PublicRoute>
            } />

            {/* Rutas protegidas */}
            <Route path="/servicios" element={
                <PrivateRoute>
                    <ServicesPage />
                </PrivateRoute>
            } />
            <Route path="/perfil" element={
                <PrivateRoute>
                    <ProfilePage />
                </PrivateRoute>
            } />
        </Routes>
    );
}

export default AppRouter;
