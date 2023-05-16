import React from 'react'
import { Link } from 'react-router-dom';


export default function menuBar(){

    return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown ">
                    <Link className="nav-link dropdown-toggle text-uppercase" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Vocazione e discernimento
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                        <div data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="dropdown-item " to="/vocazione">La Vocazione</Link>
                        <Link className="dropdown-item" to="/discernimento-vocazionale">Il Discernimento Vocazionale</Link>
                        <Link className="dropdown-item" to="/materiale-scaricabile">Materiale scaricabile</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown ">
                    <Link className="nav-link dropdown-toggle text-uppercase" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Matrimonio
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                        <div data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="dropdown-item " to="/matrimonio">La vocazione al matrimonio </Link>
                        <Link className="dropdown-item" to="/vocazioni-famose-matrimonio">Vocazioni famose</Link>
                        <Link className="dropdown-item" to="/testimonianze-matrimonio">Testimonianze</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown ">
                    <Link className="nav-link dropdown-toggle text-uppercase" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sacerdozio e vita consacrata
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                        <div data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="dropdown-item " to="/vocazione-sacerdozio">La Vocazione al sacerdozio</Link>
                        <Link className="dropdown-item" to="/vita-consacrata">La Vocazione alla vita consacrata</Link>
                        <Link className="dropdown-item" to="/vocazioni-famose">Vocazioni famose</Link>
                        <Link className="dropdown-item" to="/testimonianze">Testimonianze</Link>
                        </div>
                    </div>
                </li>
                <li data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link text-uppercase" to="/messaggi-vocazionali">Messaggi vocazionali</Link>
                </li>
                <li data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link text-uppercase" to="/domande">Le vostre domande</Link>
                </li>
                <li data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link text-uppercase" to="/proposta">La nostra proposta</Link>
                </li>
            </ul>
    )
}