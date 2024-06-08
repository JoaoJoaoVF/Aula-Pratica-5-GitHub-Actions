import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../assets/img/DraftLogoWithoutBackground.png'
import '../../assets/css/Main.css'

export default function App() {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-1 border-bottom">

                <a href="/" className="d-flex align-items-center col-md-3 mb-md-0 text-dark text-decoration-none -mt-2">
                    <img src={Logo} alt="logo" width="142" height="70" role="img" aria-label="Logo" />

                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="navegacao">
                        <a href="#" className="nav-link px-2 link-secondary">Inicio</a>
                    </li>
                    <li className="navegacao">
                        <a href="/sonbre" className="nav-link px-2 link-dark">Sobre</a>
                    </li>
                    <li className="navegacao">
                        <a href="/funcionalidades" className="nav-link px-2 link-dark">Funcionalidades</a>
                    </li>
                    <li className="navegacao">
                        <a href="/faqs" className="nav-link px-2 link-dark">FAQs</a>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2 " style={{ backgroundColor: '#173FBC' }}>
                        <Link to="/login" className="text-white text-decoration-none">
                            <span>Login</span>
                        </Link>
                    </button>
                    <button type="button" className="btn btn-primary" style={{ backgroundColor: '#9582A1' }}>
                        <Link to="/cadastro" className="text-white text-decoration-none">
                            <span>Cadastro</span>
                        </Link>
                    </button>
                </div>
            </header>
        </div>
    );
}