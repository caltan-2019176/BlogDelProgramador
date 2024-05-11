import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-light" to="/">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/tecnologia">Tecnología</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/practica">Práctica</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/taller">Taller</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
