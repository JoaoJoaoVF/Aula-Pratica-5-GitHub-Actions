import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function DiferenciaisDoUnishare() {
    return (
        <div>
            <div className="container-fluid px-4 py-5 text-justify" id="icon-grid">
                <h1 className="pb-2 border-bottom fw-bold text-#173FBC">Diferenciais do Produto Unishare</h1>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                                <path fill="#9582a1" d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm5-11l2.5-1.5L16 11V4h-5v7Z" />
                            </svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Compartilhamento de Materiais Acadêmicos</h2>
                                <p className="text-#000000">Permite que os estudantes compartilhem facilmente materiais acadêmicos, como anotações, resumos e slides de aula</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                                <path fill="#9582a1" d="M4 20V9h4v11H4Zm6 0V4h4v16h-4Z" />
                            </svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Avaliação de Qualidade</h2>
                                <p className="text-#000000">Os usuários podem avaliar a qualidade e utilidade dos recursos compartilhados, ajudando outros estudantes a encontrar o melhor material de estudo</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#9582a1" d="M5.5 22q-1.45 0-2.475-1.025T2 18.5q0-1.45 1.025-2.475T5.5 15q.45 0 .875.112t.8.313L11 11.6V8.85q-1.1-.325-1.8-1.238T8.5 5.5q0-1.45 1.025-2.475T12 2q1.45 0 2.475 1.025T15.5 5.5q0 1.2-.7 2.113T13 8.85v2.75l3.85 3.825q.375-.2.788-.313T18.5 15q1.45 0 2.475 1.025T22 18.5q0 1.45-1.025 2.475T18.5 22q-1.45 0-2.475-1.025T15 18.5q0-.45.112-.875t.313-.8L12 13.4l-3.425 3.425q.2.375.313.8T9 18.5q0 1.45-1.025 2.475T5.5 22Zm13-2q.625 0 1.063-.438T20 18.5q0-.625-.438-1.063T18.5 17q-.625 0-1.063.438T17 18.5q0 .625.438 1.063T18.5 20ZM12 7q.625 0 1.063-.438T13.5 5.5q0-.625-.438-1.063T12 4q-.625 0-1.063.438T10.5 5.5q0 .625.438 1.063T12 7ZM5.5 20q.625 0 1.063-.438T7 18.5q0-.625-.438-1.063T5.5 17q-.625 0-1.063.438T4 18.5q0 .625.438 1.063T5.5 20Z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Comunidade Colaborativa</h2>
                                <p className="text-#000000">Fomenta uma comunidade colaborativa onde os alunos podem aprender uns com os outros, trocar informações e colaborar em projetos acadêmicos</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                                <mask id="ipSBlackboard0">
                                    <g fill="none" stroke-linejoin="round">
                                        <path fill="#fff" stroke="#fff" d="M8 7h32v24H8z" />
                                        <path stroke="#fff" stroke-linecap="round" d="M4 7h40M15 41l9-10l9 10" />
                                        <path stroke="#000" stroke-linecap="round" d="M16 13h16m-16 6h12m-12 6h6" />
                                    </g>
                                </mask>
                                <path fill="#9582a1" d="M0 0h48v48H0z" mask="url(#ipSBlackboard0)" />
                            </svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4" style={{ color: '#9582a1' }}>Avaliação de Professores</h2>
                                <p style={{ color: '#000000' }}>Oferece a oportunidade de os alunos compartilharem suas opiniões e avaliações sobre os professores, auxiliando outros estudantes na escolha de cursos</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path fill="#9582a1" d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3zM2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2v9zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Avaliação de Disciplinas</h2>
                                <p className="text-#000000">Permite que os estudantes compartilhem suas experiências em relação a disciplinas específicas, ajudando os colegas a tomar decisões informadas sobre suas escolhas acadêmicas</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#9582a1" d="M3 21v-2h2V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v14h2v2H3Zm12-2h2V5h-4.5V3.9q1.1.2 1.8 1.025T15 6.85V19Zm-4-6q.425 0 .713-.288T12 12q0-.425-.288-.713T11 11q-.425 0-.713.288T10 12q0 .425.288.713T11 13Z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Acesso Simplificado ao Conhecimento</h2>
                                <p className="text-#000000">Facilita o acesso ao conhecimento, tornando-o mais amplo e simplificado para estudantes universitários</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#9582a1" d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h4m6-10h3v2h-3v-2M1 11h3v2H1v-2M13 1v3h-2V1h2M4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93L4.92 3.5m12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12l-1.42-1.42Z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Empoderamento dos Alunos</h2>
                                <p className="text-#000000">Capacita os alunos a assumirem o controle de sua jornada educacional, tomando decisões informadas e colaborando com seus pares</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 640 512"><path fill="#9582a1" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5l-3.1-5.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1L241.3 77c-10.7-8.8-23-16-36.2-20.9l-6.1-29c-1.9-9.3-9.1-16.7-18.5-17.8c-6.6-.9-13.3-1.3-20.1-1.3h-.7c-6.8 0-13.5.4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9l-28.3-9.2c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8c-1.1 6.7-1.7 13.7-1.7 20.8s.6 14.1 1.7 20.9l-22.2 19.8c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7.8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7.9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm392.7 324.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2L613 391c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5l-29.1-6.2c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1.6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2l-29.1 6c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6.9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96a48 48 0 1 1 0-96z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Melhoria na Experiência do Usuário</h2>
                                <p className="text-#000000">Integra funcionalidades avançadas e sistemas de acesso intuitivos para garantir uma experiência positiva ao usuário.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16"><path fill="#9582a1" d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Elevação do Padrão da Educação Superior</h2>
                                <p className="text-#000000">Contribui para elevar o padrão da educação superior ao promover a colaboração e a disseminação eficaz do conhecimento.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                                <mask id="ipTBackpack0">
                                    <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M19 9.556V4h-6v10M16-4.444V4h6v10" />
                                        <path fill="#555" d="M11 20c0-5.523 4.477-10 10-10h6c5.523 0 10 4.477 10 10v20a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V20Z" />
                                        <path d="M11 29H5v10h6m26-10h6v10h-6m-9-16v4m-11-4h14" />
                                    </g>
                                </mask>
                                <path fill="#9582a1" d="M0 0h48v48H0z" mask="url(#ipTBackpack0)" />
                            </svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4" style={{ color: '#9582a1' }}>Simplificação da Vida Acadêmica</h2>
                                <p style={{ color: '#000000' }}>Torna a vida acadêmica dos estudantes mais fácil, oferecendo recursos valiosos e insights úteis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#9582a1" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L3.94 5h-.19A1.75 1.75 0 0 0 2 6.75v8.5c0 .966.784 1.75 1.75 1.75h12.19l1.494 1.495a3.31 3.31 0 0 1-.184.005H4.401A2.999 2.999 0 0 0 7 20h10.25c.51 0 1-.08 1.46-.229l2.01 2.01a.75.75 0 1 0 1.06-1.061L3.28 2.22Zm8.648 10.769a2.25 2.25 0 0 1-3.167-3.167l3.167 3.167ZM5.19 6.25l1.292 1.292A2.25 2.25 0 0 1 4.25 9.5h-1V8h1A.75.75 0 0 0 5 7.25v-1h.19ZM4.25 14h-1v-1.5h1a2.25 2.25 0 0 1 2.25 2.25v1H5v-1a.75.75 0 0 0-.75-.75Zm13.5 0h-.57l1.748 1.748c.047-.158.072-.325.072-.498v-8.5A1.75 1.75 0 0 0 17.25 5H8.18l7.683 7.682a2.24 2.24 0 0 1 .887-.182h1V14ZM16 6.25v1c0 .414.336.75.75.75h1v1.5h-1a2.25 2.25 0 0 1-2.25-2.25v-1H16Zm4.062 10.631l1.085 1.085c.538-.77.853-1.706.853-2.716V10a3 3 0 0 0-1.5-2.599v7.849c0 .594-.16 1.152-.438 1.631Z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Gratuito para Todos</h2>
                                <p className="text-#000000">Unishare é uma plataforma totalmente gratuita, criada por alunos para alunos. Não cobramos nada pelo acesso aos recursos, promovendo o compartilhamento de conhecimento de forma inclusiva.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#9582a1" d="M1 18q-.425 0-.713-.288T0 17v-.575q0-1.1 1.1-1.763T4 14q.325 0 .613.025t.562.075q-.35.5-.513 1.075T4.5 16.4V18H1Zm6 0q-.425 0-.713-.288T6 17v-.6q0-1.625 1.663-2.638T12 12.75q2.7 0 4.35 1.012T18 16.4v.6q0 .425-.288.713T17 18H7Zm12.5 0v-1.6q0-.65-.175-1.225t-.5-1.075q.275-.05.563-.075T20 14q1.8 0 2.9.663t1.1 1.762V17q0 .425-.288.713T23 18h-3.5ZM4 13q-.825 0-1.413-.588T2 11q0-.825.588-1.413T4 9q.825 0 1.413.588T6 11q0 .825-.588 1.413T4 13Zm16 0q-.825 0-1.413-.588T18 11q0-.825.588-1.413T20 9q.825 0 1.413.588T22 11q0 .825-.588 1.413T20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Z" /></svg>
                            <div className="ms-3">
                                <h2 className="fw-bold mb-0 fs-4 text-#9582a1">Feito por Alunos, para Alunos</h2>
                                <p className="text-#000000">Unishare foi desenvolvido por estudantes universitários que entendem as necessidades e desafios da vida acadêmica. Nossa abordagem é centrada no usuário, criando uma plataforma pensada para atender às demandas dos colegas universitários.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

