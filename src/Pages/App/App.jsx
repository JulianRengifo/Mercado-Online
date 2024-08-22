import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'

import './App.css'

const AppRoutes = () => {
  //useRoutes se utiliza para definir rutas
  let routes = useRoutes([
    // Define que cuando la URL sea '/', se renderizará el componente Home
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <Signin/> },
    { path: '*', element: <NotFound/> },
  ])

  return routes
}

const App =() => {

  return (
    // BrowserRoutes envuelve la aplicación y proporciona el contexto de enrutamiento
    /*Inserta el componente AppRoutes dentro de BrowserRouter. Esto asegura que el enrutamiento 
    esté habilitado y que las rutas definidas en AppRoutes funcionen correctamente.*/
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
