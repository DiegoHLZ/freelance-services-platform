// src/pages/LandingPage.jsx
import { useNavigate } from 'react-router-dom';
import freelanceImg from '../assets/img/freelance.png';
import { FaBolt, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';

function LandingPage() {
    const navigate = useNavigate();
    return (
        <main className="landing-page">

            <section className="hero" data-aos="fade-up">
                <div className="text-content" data-aos="fade-right" data-aos-delay="100">
                    <h1>Conecta talentos locales con quienes los necesitan</h1>
                    <p>Encuentra o publica servicios fácilmente, desde cualquier lugar.</p>
                    <button onClick={() => navigate('/servicios')}>Explorar servicios</button>
                </div>
                <div className="image-content" data-aos="fade-left" data-aos-delay="200">
                    <img src={freelanceImg} alt="Ilustración servicios freelance"/>
                </div>
            </section>

            <section className="how-it-works" data-aos="fade-up">
                <h2>¿Cómo funciona?</h2>
                <div className="steps">
                    <div className="step" data-aos="zoom-in" data-aos-delay="100">
                        <h3>Busca un servicio</h3>
                        <div className="overlay">
                            <p>Explora la variedad de servicios disponibles en tu zona</p>
                        </div>
                    </div>
                    <div className="step" data-aos="zoom-in" data-aos-delay="100">
                        <h3>Contacta al profesional</h3>
                        <div className="overlay">
                            <p>Envía un mensaje, consulta detalles y coordina directamente con el proveedor</p>
                        </div>
                    </div>
                    <div className="step" data-aos="zoom-in" data-aos-delay="100">
                        <h3>Recibe el servicio</h3>
                        <div className="overlay">
                            <p>Disfruta de un servicio seguro y de calidad, con cercanía y confianza</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefits" data-aos="fade-up">
                <h2>¿Por qué elegirnos?</h2>
                <div className="benefit-cards">
                    <div className="benefit-card" data-aos="flip-left" data-aos-delay="100">
                        <div className="icon-circle">
                            <FaBolt/>
                        </div>
                        <h4>Rápido y sencillo</h4>
                        <p>Accede a servicios en minutos y gestiona todo de forma práctica.</p>
                    </div>
                    <div className="benefit-card" data-aos="flip-left" data-aos-delay="200">
                        <div className="icon-circle">
                            <FaHandshake/>
                        </div>
                        <h4>Conexiones confiables</h4>
                        <p>Conecta con profesionales verificados y valorados por otros usuarios.</p>
                    </div>
                    <div className="benefit-card" data-aos="flip-left" data-aos-delay="300">
                        <div className="icon-circle">
                            <FaMapMarkerAlt/>
                        </div>
                        <h4>Cercanía geográfica</h4>
                        <p>Encuentra talentos locales cerca de ti para mayor comodidad.</p>
                    </div>
                </div>
            </section>

            <section className="cta" data-aos="zoom-in-up">
                <div className="cta-content">
                    <h2>¿Listo para comenzar?</h2>
                    <p>Únete a cientos de usuarios que ya están ofreciendo y contratando servicios locales.</p>
                    <button onClick={() => navigate('/registro')}>Únete ahora</button>
                </div>
            </section>

            <footer data-aos="fade-up">
                <p>Diego Huincho &copy; 2025 Freelance Services Platform</p>
            </footer>
        </main>
    );
}

export default LandingPage;
