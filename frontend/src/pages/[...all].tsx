import { Link } from "react-router-dom";

import '../assets/css/Main.css'

export default function NotFoundPage() {
    return (
        <div className="not-found-container bg-#7988b7">
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="text-center p-4">
                    <h1 className="mb-4 text-black" >
                        <span className="text-danger"><strong>404</strong></span> | <strong>Funcionalidade ainda não implementada</strong>
                    </h1>
                    <Link to="/" className="btn btn-lg btn-primary" style={{ backgroundColor: '#173FBC' }}>
                        <strong>Voltar para o início</strong>
                    </Link>
                </div>
            </div>
        </div>
    )
}



