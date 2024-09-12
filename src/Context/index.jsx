import { createContext, useState } from 'react'

//ShopingCartContext. Este será utilizado para almacenar y proveer datos a otros componentes relacionados con el carrito de compras
export const ShoppingCartContext = createContext() 

/*export const ShopingCartProvider = ({children}) => { ... }
Esta es una función que crea un Provider de contexto, llamada ShopingCartProvider. 
Los Providers son responsables de proporcionar el contexto a los componentes descendientes.
El parámetro children es lo que se pasa dentro del componente ShopingCartProvider y representa los elementos hijos que tendrán acceso al contexto.*/
export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}