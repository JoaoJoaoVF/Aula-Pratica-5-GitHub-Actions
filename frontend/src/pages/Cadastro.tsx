import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'chart.js/auto';

import Logo from '../assets/img/DraftLogoWithoutText.png';

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        confirmarEmail: '',
        senha: '',
        confirmarSenha: '',
        curso: '',
        universidade: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const senhaValida = (senha: string) => {
        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return senhaRegex.test(senha);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verifique se as senhas são idênticas
        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        // Verifique se os emails são idênticos
        if (formData.email !== formData.confirmarEmail) {
            alert("Os emails não coincidem.");
            return;
        }

        const dataToSend = {
            nome: formData.nome + ' ' + formData.sobrenome,
            email: formData.email,
            senha: formData.senha,
            curso: formData.curso,
            universidade: formData.universidade,
        };


        try {
            const response = await axios.post('http://localhost:3000/registro', dataToSend);

            if (response.status === 200) {
                navigate('/login'); 
            } else {
                setError('Erro no registro.');
            }
        } catch (error) {
            setError('Erro de rede ou servidor não disponível.');
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='col-md-6 mb-2  mb-md-0'>
                <Link to="/" >
                    <button className="btn btn-primary mt-2" style={{ backgroundColor: '#173FBC' }}>
                        Ir para o início
                    </button>
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-center'>
                        <img src={Logo} alt="logo" role="img" width={150} height={150} />
                    </div>
                    <h1 className="h3 mb-4 fw-normal text-center text-#9582A1">Faça seu cadastro :)</h1>
                    <p className="h3 mb-15 fw-normal text-center text-#173FBC">Junte-se à comunidade Unishare e desbloqueie seu potencial acadêmico!</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                    placeholder="Nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="nome">Nome</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sobrenome"
                                    name="sobrenome"
                                    placeholder="Sobrenome"
                                    value={formData.sobrenome}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="sobrenome">Sobrenome</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="confirmarEmail"
                                    name="confirmarEmail"
                                    placeholder="Confirme seu E-mail"
                                    value={formData.confirmarEmail}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="confirmarEmail">Confirmar E-mail</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    name="senha"
                                    placeholder="Senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="senha">Senha</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmarSenha"
                                    name="confirmarSenha"
                                    placeholder="Confirme sua Senha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="universidade"
                                    name="universidade"
                                    placeholder="Universidade"
                                    value={formData.universidade}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="universidade">Digite sua universidade</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="curso"
                                    name="curso"
                                    placeholder="Curso"
                                    value={formData.curso}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="curso">Curso</label>
                            </div>
                        </div>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: '#9582A1' }} type="submit">
                        Crie seu Cadastro
                    </button>
                    <div className="text-center mt-3">
                        <a>Já possui cadastro? Faça seu </a><Link to="/login">login</Link>
                    </div>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; Unishare, 2023</p>
                </form>
            </div>
        </div>
    );
}
