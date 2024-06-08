import { Link } from 'react-router-dom'

import Logo from '../../assets/img/DraftLogoWithoutText.png'
import '../../assets/css/Main.css'

export default function Footer() {

  return (
    <div className="container-fluid">

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; 2023 Unishare, Inc</p>

        <a href="/" className="">
          <img src={Logo} alt="logo" width="40" height="40" role="img" aria-label="Bootstrap" />
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item navegacao">
            <a href="#" className="nav-link px-2 text-muted">Inicio</a>
          </li>
          <li className="nav-item navegacao">
            <a href="/sobre" className="nav-link px-2 text-muted">Sobre</a>
          </li>
          <li className="nav-item navegacao">
            <a href="/funcionalidades" className="nav-link px-2 text-muted">Funcionalidades</a>
          </li>
          <li className="nav-item navegacao">
            <a href="/faqs" className="nav-link px-2 text-muted">FAQs</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
