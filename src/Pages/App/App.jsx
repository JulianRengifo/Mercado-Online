import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signim from '../Signim'
import './App.css'

function App() {

  return (
    <div className='bg-red-500'>
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <Signim/>
    </div>
  )
}

export default App
