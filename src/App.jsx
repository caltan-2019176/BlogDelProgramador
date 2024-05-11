import { useRoutes } from "react-router-dom"
import { routes } from "./routes.jsx"
import {Home} from '../src/pages/Home.jsx'

function App() {
  const element = useRoutes(routes)


  return (
    <>
      {element}
    </>
  )
}

export default App
