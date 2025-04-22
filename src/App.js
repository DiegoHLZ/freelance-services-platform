// src/App.js
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/main.scss';

import AppRouter from './routes/AppRouter';
import Navbar from "./components/Navbar";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Router>
            <Navbar />
            <AppRouter />
        </Router>
    );
}

export default App;
