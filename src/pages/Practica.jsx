import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footers } from '../components/Footers'
import './practica.css'
import { Tarea } from '../components/Tarea'

export const Practica = () => {
  const tareasPractica1 = [
    {
      id: 1,
      titulo: 'Laboratorio PS#1',
      description: 'Agenda web',
      habilidades: 'Generar un toDoList, uso de html, css y javascript para la parte de contactos.',
      link: 'https://cetkinal-my.sharepoint.com/:f:/g/personal/caltan-2019176_kinal_edu_gt/EslVq---eLRCqUtX43zQTYsBDPa5bvMj60uuLmT_lcvZog?e=QZwaFO',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Practica/lab1.png'
    },
    {
      id: 2,
      titulo: 'Laboratorio PS#2',
      description: 'Contol ácademico',
      habilidades: 'Uso de nodeJs, jwt, mongoose, bcrypt, uso de roles, CRUD con javaScript',
      link: 'https://github.com/caltan-2019176/ControlAcademicoIN6AM.git',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Practica/controlacade.png'
    },
    {
      id: 3,
      titulo: 'Laboratorio PS#3',
      description: 'Gestor de opiniones',
      habilidades: 'Uso de Node.js, Express, MongoDB, uso de login, aplicación de middlewares ',
      link: 'https://github.com/caltan-2019176/GestorOpiniones.git',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Practica/gestoOpo.png'
    }
  ]
  const tareasPractica2 = [
    {
      id: 1,
      titulo: 'Frameworks de aplicaciones híbridas',
      description: 'Exposición de aplicaciones híbridos',
      habilidades: 'Caracteristicas y usos de frameworks para aplicaciones hibridas, caracteristicas, beneficios de estas.',
      link: 'https://www.canva.com/design/DAGBVuvVB8M/hWucg4qcIkCUjg5xK4dsBA/edit?utm_content=DAGBVuvVB8M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Practica/ionic.png'
    },
    {
      id: 2,
      titulo: 'Almacenadora',
      description: 'App con backend y frontend con react de una almacenadora',
      habilidades: 'Uso de react para le creacion del frontend con cnoexion a base de datos',
      link: 'https://github.com/Grupo-7-IN6AM/AlmacenadoraIN6AM-G7-React.git',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Practica/almca.png'
    }
  ]
  return (
    <div> 
      <Navbar/>
      <section className="inicio-practica">
        <h1>Práctica supervisada</h1>
      </section>
      <div className='cardss'>
        <div className="bimestre-container">
          <div className="bimestre-title">Bimestre 1</div>
          <div className="tareas-container">
            {tareasPractica1.map((task) => (
              <Tarea
                key={task.id}
                titulo={task.titulo}
                description={task.description}
                habilidades={task.habilidades}
                link={task.link}
                imagen={task.imagen}
              />
            ))}
          </div>
        </div>
        <div className="bimestre-container bimestre-2">
          <div className="bimestre-title">Bimestre 2</div>
          <div className="tareas-container">
            {tareasPractica2.map((task) => (
              <Tarea
                key={task.id}
                titulo={task.titulo}
                description={task.description}
                habilidades={task.habilidades}
                link={task.link}
                imagen={task.imagen}
              />
            ))}
          </div>
        </div>
      </div>
      <Footers/>
    </div>
  )
}
