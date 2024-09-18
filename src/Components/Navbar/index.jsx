import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

     // Usar useContext para acceder al ShopingCartContext
    const context = useContext(ShoppingCartContext)
    /*activeStyle es una cadena que define una clase de estilo que se aplicará a los enlaces (NavLink) que estén activos. 
    En este caso, los enlaces activos tendrán un subrayado con un desplazamiento (underline-offset-4*/
    const activeStyle = 'underline underline-offset-4'

    // fixed Fijar la barra de navegación en la parte superior.
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    {/*El estilo activo se determina con la prop className, que utiliza una función para evaluar si el enlace
                    está activo (isActive). Si es activo, se aplica activeStyle, de lo contrario, no se aplica ninguna clase*/}
                    <NavLink 
                        to='/all'
                        className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({isActive})=>
                        isActive ? activeStyle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    julian@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-order'
                        className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        Signin
                    </NavLink>
                </li>
                {/*Ingresa a context y le el valor que contiene count*/}
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'/>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar