import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footers } from '../components/Footers'
import './tecnologia.css'
import { Tarea } from '../components/Tarea'

export const Tecnologia = () => {
  const tareasTecno1 = [
    {
      id: 1,
      titulo: 'Inforgafía',
      description: 'Infografía sobre preprocesadores y terminos de desarrollo web',
      habilidades: 'Conocimiento sobre terminos como: HTML, CSS, Bootstrap, SSAS, LESS, etc.',
      link: 'https://www.canva.com/design/DAF6qVgsRgA/OCApPsDUMNESXxx3PNY0Uw/edit?utm_content=DAF6qVgsRgA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Tecnologia/1BIM/Info%20tecno%20desarrollo%20web.png'
    },
    {
      id: 2,
      titulo: 'Mapa conceptual',
      description: 'Mapa conceptual sobre tecnologías web',
      habilidades: 'Conocimiento sobre terminos como: JavaScript, AJAX, MVVC, Deno.js, Next.js, etc.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/caltan-2019176_kinal_edu_gt/Eb6fqA2feYBGseTooKOYOhEBn7bUNVyr9skRaWV6GztgiQ?e=2TQSgZ',
      imagen: 'https://cocosolution.com/cms/uploads/1657204741-o_1fj38p0rk1m0oc6fjbpfda4k1a.png'
    },
    {
      id: 3,
      titulo: 'Prueba Objetiva',
      description: 'Cuestionario acerca de las tareas de infografía y mapa conceptual',
      habilidades: 'Repaso sobre conocimientos de tecnologías web y código javascript.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/caltan-2019176_kinal_edu_gt/ETHPF22IkplHoxesffIAD6UBIZDx1q6ZqDqm52ZRkeOw_g?e=prJkjC',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Tecnologia/1BIM/prueba%20objetiva.png'
    },
    {
      id: 4,
      titulo: 'Mapa mental',
      description: 'Mapa mental sobre desarrollo web',
      habilidades: 'Adquirí concomientos sobre Hosting, dominios, cliente-servidor, W3C, etc.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/caltan-2019176_kinal_edu_gt/ESR6uHsk93BBpV9FM-TNIsIBd1Lx8EHrIwma-ggnxMO_iQ?e=146vrD',
      imagen: 'https://www.iontics.com/wp-content/uploads/2021/09/que-es-hosting.jpg'
    }, {
      id: 5,
      titulo: 'Prueba Objetiva #2',
      description: 'Prueba sobre los conocimientos de bimestre',
      habilidades: 'Conocimientos de javascript, nodeJs, programación web.',
      link: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Tecnologia/1BIM/prueba2.png',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Tecnologia/1BIM/prueba2.png'
    }

  ]
  const tareasTecno2 = [
    {
      id: 1,
      titulo: 'Inforgafía',
      description: 'Infografía sobre Beneficios de React',
      habilidades: 'Conocimientos acerca de ract, caracteristicas, diseños, Compatibilidad, etc..',
      link: 'https://www.canva.com/design/DAGBgHoxmgc/TVT30ReM-ikpV_k6wIZ9Qw/edit?utm_content=DAGBgHoxmgc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Tecnologia/1BIM/beneficios%20de%20react.png'
    },
    {
      id: 2,
      titulo: 'Propuesta de proyecto',
      description: 'propuesta de un proyecto innovador',
      habilidades: 'Elaboración completa de una propuesta de proyecto, eleboración de diagramas y presupuesto',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/caltan-2019176_kinal_edu_gt/EUJDGnimtw1Jqhxw4OY0StABarFM88hvw_Ma-SXqrzMCug?e=r6PEF8',
      imagen: 'https://qph.cf2.quoracdn.net/main-qimg-afcf3c83cf0d1cb9af7c8b1825491b6f-lq'
    },
    {
      id: 3,
      titulo: 'Exposición de proyecto',
      description: 'Exposición acerca del proyecto propuesto',
      habilidades: 'Exponer la propuesta, sus funciones, modelos, caracteristicas, etc.',
      link: 'https://www.canva.com/design/DAGDAw_qqd8/HGuyQXKkLkQdPGfw7TCxbA/edit',
      imagen: 'https://cetkinal-my.sharepoint.com/personal/caltan-2019176_kinal_edu_gt/Documents/2024/BlogTaller/Tecnologia/1BIM/expo%20de%20proyecto.png'
    },
    {
      id: 4,
      titulo: 'Investigación',
      description: 'Investigación sobre coding style',
      habilidades: 'Formas de codificación en javaScript',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/caltan-2019176_kinal_edu_gt/EcuApxyTaP5Ih4ZGp_-UqgcB47Z4GJ8IckAAWeNnmBK2kQ?e=f013mc',
      imagen: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDYzOTAzNzMxMjMwMzQy/coding-style-how-to-write-code.webp'
    },
    

  ]

  return (
    <div>
      <Navbar />
      <section className="inicio-tecno">
        <h1>Tecnología</h1>
      </section>
      <div className='intro'>
        <div className='container'>
          <div className='textIntro'>
            <h2>Tecnología III</h2>
            <p>EI curso de Tecnología III pretende llevarlo por la teoría de cada tema a aplicar durante la clase de taller,
              siendo la teoría 10 primero a entender, para luego proceder a la práctica.
              En este curso el estudiante tendrá la capacidad de desarrollar aplicaciones con tecnología Web y móvil,
              mediante los conocimientos tanto teóricos como prácticos de Node.js, ReactJs, Railway, así como hacer
              uso del lenguaje de programación Javascript, esto implica que el estudiante tendrá la capacidad de
              poder instalar y configurar un Web Api, una página web, conjunto a la capacidad de conectar sus
              aplicaciones a bases de datos NoSQL y conexión en la nube.
            </p>
          </div>
        </div>
      </div>
      <div className='cardss'>
        <div className="bimestre-container">
          <div className="bimestre-title">Bimestre 1</div>
          <div className="tareas-container">
            {tareasTecno1.map((task) => (
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
            {tareasTecno2.map((task) => (
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
      <Footers />
    </div>
  )
}
