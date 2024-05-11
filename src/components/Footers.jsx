import React from 'react'
import './footer.css'

export const Footers = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Teléfono</h3>
          <p>+502 42368689</p>
        </div>
        <div className="footer-section">
          <h3>Correo</h3>
          <p>caltan-2019176@kinal.edu.gt</p>
        </div>
        <div className="footer-section">
          <h3>GitHub</h3>
          <a href="https://github.com/caltan-2019176" target="_blank" rel="noopener noreferrer">
            <p>caltan-2019176</p>
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; Carlos Daniel Altán Cortez-2019176
      </div>
    </footer>
  )
}
