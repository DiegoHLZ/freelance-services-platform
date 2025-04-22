// ✅ FINAL NAVBAR.JSX - Responsive & Clean with Icons
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    FaUserCircle,
    FaBars,
    FaTimes,
    FaSignInAlt,
    FaUserPlus,
    FaBriefcase
} from 'react-icons/fa';

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedUser')));
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll para aplicar sombra al navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Verificar usuario en localStorage cada cierto tiempo
    useEffect(() => {
        const interval = setInterval(() => {
            const currentUser = JSON.parse(localStorage.getItem('loggedUser'));
            setUser(currentUser);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('loggedUser');
        setUser(null);
        navigate('/');
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <Link to="/" className="nav-logo" onClick={closeMenu}>FreelanceApp</Link>

                    <div className={`menu-toggle-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><FaBriefcase/><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
                        {user ? (
                            <>
                                <li className="user-info">
                                    <FaUserCircle className="user-icon"/>
                                    <Link to="/perfil" onClick={closeMenu}>{user.name.split(' ')[0]}</Link>
                                </li>
                                <li>
                                    <button onClick={() => {
                                        handleLogout();
                                        closeMenu();
                                    }}>Cerrar sesión</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><FaSignInAlt/><Link to="/login" onClick={closeMenu}>Iniciar Sesión</Link></li>
                                <li><FaUserPlus/><Link to="/registro" onClick={closeMenu}>Registrarse</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>

            {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
        </>
    );
}

export default Navbar;
