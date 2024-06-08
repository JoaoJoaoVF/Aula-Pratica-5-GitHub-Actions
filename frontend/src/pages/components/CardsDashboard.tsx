import { useState, useEffect } from 'react';
import 'chart.js/auto';

import Logo from '../../assets/img/DraftLogoWithoutText.png';

export default function CardsDashboard() {

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

    const boasvindas = (
        <span className='display-5 fw-bold lh-1 mb-3 text-body-emphasis'>
            Bem vindo, <span className="text-#173FBC display-5 fw-bold lh-1 mb-3">{user ? user.nome : 'Visitante'}</span> ao Unishare
        </span>
    );
    const curso = `${user ? user.curso : ''}`;
    const disciplinas = 'Você ainda não possui disciplinas cadastradas';
    const forunsText = 'Você ainda não possui fóruns para participar.';
    const avaliacoesText = 'Você ainda não possui avaliações para fazer.';

    return (
        <div>
            <div className='container-fluid'>
                <div className="b-example-divider"></div>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <h1 className="">{boasvindas}</h1>
                            <h2 className="display-5 text-#7988B7 fw-bold lh-1 mb-3">{curso}</h2>
                        </div>
                        <div className="col-lg-6">
                            <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="200" height="200" loading="lazy" />
                        </div>
                    </div>
                </div>

                <div className="card-deck row">
                    <div className="card col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Minhas disciplinas</h5>
                            <ul className="list-unstyled text-gray">
                                {disciplinas}
                            </ul>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Fóruns</h5>
                            <p className="card-text text-gray">{forunsText}</p>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Avaliações</h5>
                            <p className="card-text text-gray">{avaliacoesText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}