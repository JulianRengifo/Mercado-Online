import { createContext } from 'react'

//ShopingCartContext. Este será utilizado para almacenar y proveer datos a otros componentes relacionados con el carrito de compras

const ShopingCartContext = createContext() 
/*export const ShopingCartProvider = ({children}) => { ... }
Esta es una función que crea un Provider de contexto, llamada ShopingCartProvider. 
Los Providers son responsables de proporcionar el contexto a los componentes descendientes.
El parámetro children es lo que se pasa dentro del componente ShopingCartProvider y representa los elementos hijos que tendrán acceso al contexto.*/
export const ShopingCartProvider = ({children}) => {
    return (
        <ShopingCartContext.Provider>
            {children}
        </ShopingCartContext.Provider>
    )
}