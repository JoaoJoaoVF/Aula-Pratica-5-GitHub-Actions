import React, { useState } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import '../../assets/css/Main.css';

import Logo from '../../assets/img/DraftLogoWithoutBackground.png';

export default function HeaderDashboard() {
    const [isDropdown2Open, setDropdown2Open] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <header className="py-3 mb-3 border-bottom">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 -mt-2">
                        <img src={Logo} alt="logo" width="142" height="70" role="img" aria-label="Logo" />
                    </div>

                    <div className="col-lg-8 d-flex align-items-center">
                        <form className="w-100 me-3" role="search">
                            <input type="search" className="form-control" placeholder="Pesquisar..." aria-label="Search" />
                        </form>

                        <Dropdown show={isDropdown2Open} onToggle={(isOpen) => setDropdown2Open(isOpen)}>
                            <Dropdown.Toggle
                                as="a"
                                href="#"
                                className="d-block link-dark text-decoration-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#173fbc" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z" /></svg>
                            </Dropdown.Toggle>
                            <Nav className=''>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link to="/dashboard" className="nav-link">
                                            Inicio
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/configuracoes" className="nav-link">
                                            Configurações
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/perfil" className="nav-link">
                                            Perfil
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                        <button onClick={handleLogout} className="nav-link">
                                            Sair
                                        </button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Nav>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    );
}
