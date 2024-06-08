import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Missao from '../../../assets/img/missao.jpg';
import Valores from '../../../assets/img/valores.jpg';
import Visao from '../../../assets/img/visao.jpg';

import '../../../assets/css/Main.css';

export default function MissaoValoresVisao() {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    const buttonStyle = {
        backgroundColor: '#9582A1',
    };

    return (
        <div>
            <div className="container-fluid my-6">
                <div className="row align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-#173FBC">Valores Unishare</h1>
                        <p className="lead text-center">
                            <br />
                            <button
                                style={buttonStyle}
                                className="text-decoration-none text-white rounded-full py-2 px-6 text-base cursor-pointer m-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Promovemos a ideia de que juntos somos mais fortes. Acreditamos no poder da colaboração entre estudantes para aprimorar o conhecimento e o sucesso acadêmico."
                            >
                                Aprendizado Colaborativo
                            </button>


                            <button
                                style={buttonStyle}
                                className="text-decoration-none text-white rounded-full py-2 px-6 text-base cursor-pointer m-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Defendemos o acesso equitativo ao conhecimento, proporcionando recursos educacionais de alta qualidade de forma gratuita para todos."
                            >
                                Acesso Universal ao Conhecimento
                            </button>

                            <button
                                style={buttonStyle}
                                className="text-decoration-none bg- text-white rounded-full py-2 px-6 text-base cursor-pointer m-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Valorizamos a integridade e a honestidade em todas as interações. Fornecemos avaliações e informações transparentes para ajudar os estudantes a tomar decisões informadas."
                            >
                                Transparência e Honestidade
                            </button>

                            <button
                                style={buttonStyle}
                                className="text-decoration-none bg- text-white rounded-full py-2 px-6 text-base cursor-pointer m-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-title="Buscamos constantemente inovar e melhorar nossa plataforma, adaptando-nos às necessidades em constante evolução dos estudantes universitários."
                            >
                                Inovação Constante
                            </button>

                            <button
                                style={buttonStyle}
                                className="text-decoration-none bg- text-white rounded-full py-2 px-6 text-base cursor-pointer m-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-title="Acreditamos que os estudantes devem ser capacitados para tomar decisões informadas sobre suas jornadas educacionais e alcançar seus objetivos acadêmicos."
                            >
                                Empoderamento Estudantil
                            </button>
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div className="overflow-hidden shadow-lg">
                            <img
                                className="img-fluid rounded-lg-3"
                                src={Valores}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-6">
                <div className="row align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-5">
                        <div className="overflow-hidden shadow-lg">
                            <img
                                className="img-fluid rounded-lg-3"
                                src={Missao}
                                alt=""
                            />
                        </div>
                    </div><div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-#173FBC">Missão Unishare</h1>
                        <p className="lead text-justify text-#000000">
                            Nossa missão é capacitar estudantes universitários por meio da criação de uma comunidade colaborativa que simplifica o compartilhamento de materiais acadêmicos, fornece avaliações de qualidade e promove a troca de informações sobre professores e disciplinas. Queremos tornar o acesso ao conhecimento mais amplo, acessível e transparente, elevando assim o padrão da educação superior.
                        </p>
                    </div>
                    
                </div>
            </div>


            <div className="container-fluid my-6">
                <div className="row align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-#173FBC">Visão Unishare</h1>
                        <p className="lead text-justify text-#000000">
                            Nossa visão é ser a plataforma líder global para estudantes universitários, onde o compartilhamento de conhecimento é universal, colaborativo e gratuito. Queremos criar um ambiente onde todos os estudantes tenham acesso a recursos de alta qualidade, possam contribuir para a comunidade acadêmica e tomar decisões informadas sobre sua educação. Com Unishare, aspiramos a transformar a experiência universitária, tornando-a mais rica, conectada e orientada para o sucesso.
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div className="overflow-hidden shadow-lg">
                            <img
                                className="img-fluid rounded-lg-3"
                                src={Visao}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
