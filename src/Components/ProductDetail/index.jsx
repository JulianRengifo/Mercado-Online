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
                <div className='cursor-pointer'
                onClick={() => context.closeProductDetail()}>
                <XCircleIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail