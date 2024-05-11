import React from 'react'
import './tarea.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Tarea = ({key, titulo, description, habilidades, link, imagen}) => {
  return (
    <div className="card" style={{ width: '19rem' }} key={key}>
      <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title"><strong>{titulo}</strong></h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Habilidades Adquiridas:</strong> {habilidades}
        </p>
        <a href={link} className="btn btn-secondary " target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  )
}
