import { createContext, useState } from 'react'

//ShopingCartContext. Este será utilizado para almacenar y proveer datos a otros componentes relacionados con el carrito de compras
export const ShoppingCartContext = createContext() 

/*export const ShopingCartProvider = ({children}) => { ... }
Esta es una función que crea un Provider de contexto, llamada ShopingCartProvider. 
Los Providers son responsables de proporcionar el contexto a los componentes descendientes.
El parámetro children es lo que se pasa dentro del componente ShopingCartProvider y representa los elementos hijos que tendrán acceso al contexto.*/
export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    
    // Alternar entre abrir/cerrar ProductDetail

    /*Si el estado actual isProductDetailOpen es false (los detalles del producto están cerrados),
    al llamar a toggleProductDetail(), la función cambiará isProductDetailOpen a true (los detalles del producto se abrirán).*/
    /*prevState: Es el valor actual del estado isProductDetailOpen. Si isProductDetailOpen es true, prevState será true, y si es false, prevState será false.
    !prevState: El operador ! invierte el valor de prevState. Si prevState es true, entonces !prevState será false, y viceversa.
    Por lo tanto, cada vez que se llama a setIsProductDetailOpen((prevState) => !prevState), el estado alternará entre true y false*/

    /* const toggleProductDetail = () => {
    setIsProductDetailOpen((prevState) => !prevState);
    }; */

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}