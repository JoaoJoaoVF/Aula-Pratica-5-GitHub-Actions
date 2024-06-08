import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import backgroundImg from '../../../assets/img/background.jpg';

export default function BemVindoAoUnishare() {

    return (
        <div>

            <div className="col-md-12 p-5 bg-dark rounded-3" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '60vh' }}>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-#173FBC">Bem-vindo ao Unishare</h1>
                    <p className="col-md-8 fs-4">
                        Compartilhando Conhecimento Universitário de Forma Inovadora e Colaborativa.
                        Simplificando o acesso a materiais acadêmicos, avaliações de qualidade e
                        insights sobre professores e disciplinas. Junte-se à nossa comunidade para
                        aprimorar sua jornada educacional!
                    </p>
                    <button className="btn btn-primary btn-lg" style={{backgroundColor: '#9582a1'}} type="button">Saiba Mais</button>
                </div>
            </div>



        </div>
    );
}

