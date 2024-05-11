import {NotFoundPages} from '../src/pages/NotFoundPages.jsx'
import {Tecnologia} from '../src/pages/Tecnologia.jsx'
import {Taller} from '../src/pages/Taller.jsx'
import {Practica} from '../src/pages/Practica.jsx'
import { Home } from './pages/Home.jsx'

export const routes = [
    {
        path: '/',
        element: <Home />
    }, 
    {
        path: '/tecnologia',
        element: <Tecnologia/>
    },
    {
        path: '/taller',
        element: <Taller/>
    },
    {
        path: '/practica',
        element: <Practica/>
    }, 
    {
        path: '*', 
        element: <NotFoundPages/>
    }
]