import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footers } from '../components/Footers'
import './taller.css'
import { Tarea } from '../components/Tarea'
export const Taller = () => {
  const tareasTaller1 = [
    {
      id: 1,
      titulo: 'Laboratorio #1',
      description: 'Creación de páginas web',
      habilidades: 'Uso de html, css.',
      link: 'https://cetkinal-my.sharepoint.com/:f:/g/personal/caltan-2019176_kinal_edu_gt/Egr4DVw0omxHqp7CIxZHSkkBnqm8VKdn1gHYSque44fPOw?e=aY05HF',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/kinasd.png'
    },
    {
      id: 2,
      titulo: 'Laboratorio #2',
      description: 'Sistema de adopción de mascotas.',
      habilidades: 'Uso de nodeJs, javaScript, creación de un api de un sistema de adopción, uso de endpoints.',
      link: 'https://github.com/caltan-2019176/AdoptionSystem.git',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/adopsis.png'
    },
    {
      id: 3,
      titulo: 'Revisión de avances en proyecto final de bimestre',
      description: 'Revisión del 35% del proyecto de bimestre',
      habilidades: 'Creación de un api de sistema de ventas online, aplicación de subdocumentos, middlewares.',
      link: 'https://github.com/caltan-2019176/Proyecto1BIM.git',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/proyecBim.png'
    },
    {
      id: 4,
      titulo: 'Laboratorio #3',
      description: 'Proyecto de gestor de empresas',
      habilidades: 'Creación de un api para gestión de empresas, uso de roles,  generación de reportes en excel.',
      link: 'https://github.com/caltan-2019176/GestorEmpresa',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/ggestoEMpresa.png'
    }, {
      id: 5,
      titulo: 'Proyecto Final',
      description: 'Entrega de un api de ventas online',
      habilidades: 'Generación de facturas, carrito de compras, manejo de stock, validaciones por medio del middlewares, uso de subdoumentos.',
      link: 'https://github.com/caltan-2019176/Proyecto1BIM/tree/versionFinal',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/proyefinal.png'
    }

  ]
  const tareasTaller2 = [
    {
      id: 1,
      titulo: 'Ejercicios sobre lógica de programación.',
      description: 'Ejercicios de lógica haciendo uso del lenguaje JavaScript, en plataforma “HackerRank”.',
      habilidades: 'lógica de programación para al resolución de los problemas.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/caltan-2019176_kinal_edu_gt/EZRYDvEkS89OooqM4b8gU34Be8lDDks0ej-P_vu6zobuyg?e=bLeZRf',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/hacekrran.png'
    },
    {
      id: 2,
      titulo: 'Revisión de avances en proyecto final de bimestre',
      description: 'Entrega del 33% del proyecto de hotelería.',
      habilidades: 'Manejo de routes en react, uso de componentes, implementación de axios, habilidades de html y css. NOTA: debes de aceptar la invitación a la organización de github',
      link: 'https://github.com/Grupo-7-IN6AM/ZaruTraveling-Front.git',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/zaru.png'
    },
    {
      id: 3,
      titulo: 'Blog',
      description: 'Blog del programador con las tareas de todo el año',
      habilidades: 'Uso de react, componentes, uso de html y css.',
      link: '',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Taller/proyecBim.png'
    }

  ]
  return (
    <div> 
      <Navbar/>
      <section className="inicio-taller">
        <h1>Taller</h1>
      </section>
      <div className='cardss'>
        <div className="bimestre-container">
          <div className="bimestre-title">Bimestre 1</div>
          <div className="tareas-container">
            {tareasTaller1.map((task) => (
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
            {tareasTaller2.map((task) => (
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
