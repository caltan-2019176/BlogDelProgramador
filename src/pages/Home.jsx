import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footers } from '../components/Footers'
import './home.css'

export const Home = () => {
  return (

    <div>
      <Navbar />
      <section className="inicio">
        <h1>Blog del programador</h1>
      </section>
      <div className='intro'>
        <div className='container'>
        <div className='img-container'></div>
          <div className='textIntro'>
          <h2>El blog del programador</h2>
          <p>Bienvenido al Blog del programador, Soy Carlos Altán estudiante
             de 6to perito en informática, en está blog encontrarás mis 
             trabajos y tareas realizadas a lo largo de este año de 
             estudios académicos.</p>
             <br />
            <p>Encontrarás proyectos relizados en javaScript con node.js, algunos trabajos acerca
              de teoría, proyectos de react, con conexión a un api por medio de axios, etc.
            </p>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  )
}
