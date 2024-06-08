import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../layouts/home';
import DiferenciaisDoUnishare from './components/Index/DiferenciaisDoUnishare';
import BemVindoAoUnishare from './components/Index/BemVindoAoUnishare';
import MissaoValoresVisao from './components/Index/MissaoValoresVisao';
import ObjetivosUnishare from './components/Index/ObjetivosUnishare';

import '../assets/css/Main.css';

export default function HomePage() {

    return (
        <Home>
            <div className='container-fluid'>
                <div className='row'>

                    <BemVindoAoUnishare />

                    <MissaoValoresVisao />

                    <ObjetivosUnishare />

                    <DiferenciaisDoUnishare />

                </div>
            </div>
        </Home >
    );
}

