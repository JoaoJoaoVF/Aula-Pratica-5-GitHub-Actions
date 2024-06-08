import React, { useEffect, useState } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import '../../assets/css/Main.css';

export default function SideBarDashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:3000/aluno', {
            method: 'GET',
            headers: {
                'Authorization': token,
            },
        })
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className='col-md-1' style={{ height: '100%' }}>
            <div className="d-flex flex-column flex-shrink-0 p-0">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                </a>
                <Nav className="flex-column mb-auto">
                    <NavItem className='navegacao'>
                        <Nav.Link href="/dashboard" active>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#173FBC" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z" /><path fill="#173FBC" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z" /></svg>

                            Inicio
                        </Nav.Link>
                    </NavItem>
                    <NavItem className='navegacao'>
                        <Nav.Link href="/disciplinas" active>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#173FBC" d="M4 3h2v18H4zm14 0H7v18h11c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 6h-6V8h6v1zm0-2h-6V6h6v1z" /></svg>
                            Disciplinas
                        </Nav.Link>
                    </NavItem>
                    <NavItem className='navegacao'>
                        <Nav.Link href="/professores" active>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="#173FBC" d="M5.16 2.189a1.962 1.962 0 0 1 1.68 0l4.874 2.309a.5.5 0 0 1 .008.9l-4.85 2.406a1.962 1.962 0 0 1-1.744 0L1 5.756V8a.5.5 0 0 1-1 0V4.975a.502.502 0 0 1 .286-.477l4.874-2.31ZM2 7.369V9a.5.5 0 0 0 .147.354l.002.003l.023.021l.06.056a6.738 6.738 0 0 0 1.012.745C3.912 10.58 4.877 11 6 11c1.123 0 2.088-.42 2.757-.821a6.738 6.738 0 0 0 1.012-.745l.06-.056l.016-.016l.006-.006l.001-.001l.002-.001A.5.5 0 0 0 10 9V7.368L7.316 8.7a2.962 2.962 0 0 1-2.632 0L2 7.368Z" /></svg>
                            Professores
                        </Nav.Link>
                    </NavItem>
                    <NavItem className='navegacao'>
                        <Nav.Link href="/arquivos" active>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#173fbc" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8H4v10l2.4-8h17.1l-2.575 8.575q-.2.65-.738 1.038T19 20H4Z" /></svg>
                            Arquivos
                        </Nav.Link>
                    </NavItem>
                    <NavItem className='navegacao'>
                        <Nav.Link href="/foruns" active>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#173FBC" d="M17 4v7a2 2 0 0 1-2 2H4v1a2 2 0 0 0 2 2h10l4 4V6a2 2 0 0 0-2-2zM6 10H0v6z" /><rect width="16" height="12" fill="#173FBC" rx="2" /></svg>
                            Fóruns
                        </Nav.Link>
                    </NavItem>
                    {user && user.tipo === 0 && (
                        <NavItem className='navegacao'>
                            <Nav.Link href="/moderacao" active>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#173fbc" d="M6 22q-.825 0-1.413-.588T4 20v-4q0-.825.588-1.413T6 14h12q.825 0 1.413.588T20 16v4q0 .825-.588 1.413T18 22H6Zm1-4h10q.425 0 .713-.288T18 17q0-.425-.288-.713T17 16H7q-.425 0-.713.288T6 17q0 .425.288.713T7 18Zm4.175-5.15l-3.7-5.175q-.225-.325-.312-.712t-.038-.788q.3-1.825 1.65-3T12 2q1.875 0 3.225 1.175t1.65 3q.05.4-.038.788t-.312.712l-3.7 5.175q-.3.425-.825.425t-.825-.425Z" />
                                </svg>
                                Moderação
                            </Nav.Link>
                        </NavItem>
                    )}
                </Nav>
            </div>
        </div>
    );
}
