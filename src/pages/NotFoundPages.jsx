import React from 'react'
import './notFoundPage.css'
import { Link } from 'react-router-dom'

export const NotFoundPages = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
