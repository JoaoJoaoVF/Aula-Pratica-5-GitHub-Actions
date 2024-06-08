import { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import Axios from 'axios'; 
import 'chart.js/auto'; 

import Logo from '../assets/img/DraftLogoWithoutBackground.png';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

     const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            senha: password,
        };
        try {
            const response = await Axios.post('http://localhost:3000/login', loginData);
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/dashboard');
        } catch (error) {
            setError('Credenciais inválidas');
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='col-md-6 mb-2 mb-md-0'>
                <Link to="/">
                    <button className="btn btn-primary mt-2" style={{ backgroundColor: '#173FBC' }}>
                        Ir para o início
                    </button>
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-center'>
                        <img src={Logo} alt="logo" role="img" width={600} height={300} />
                    </div>
                    <h1 className="h3 mb-5 fw-normal text-center text-#9582A1">Faça aqui seu login 🎉</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label htmlFor="floatingInput">E-mail</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Mantenha-me conectado
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: '#9582A1' }} type="submit">
                        Entrar
                    </button>
                    <div className="text-center mt-3">
                        <a href="/esqueceu-senha">Esqueceu a senha?</a>
                        <span className="mx-2">|</span>
                        <a href="/cadastro">Cadastrar-se</a>
                    </div>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; Unishare, 2023</p>
                </form>
            </div>
        </div>
    );
}