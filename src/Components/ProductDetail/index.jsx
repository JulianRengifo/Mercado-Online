import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    
    //Usamos ${context.isProductDetailOpen ? 'flex' : 'hidden'} para controlar la visibilidad del elemeto ProductDetail
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                <XCircleIcon className="h-6 w-6 text-black cursor-pointer" 
                onClick={() => context.closeProductDetail()}/>
                </div>
            </div>
            <figure className='px-6'>
                {/* muestra los detalles de un producto que está utilizando propiedades del objeto*/}
                    <img className='w-full h-full rounded-lg' 
                    src={context.productToShow.images}
                    alt={context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                    <span className='font-medium'>${context.productToShow.title}</span>
                    <span className='font-light text-sm'>${context.productToShow.description}</span>
                </p>
        </aside>
    )
}

export default ProductDetail