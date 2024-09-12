import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

//El componente recibe data como un argumento, que es un objeto que contiene los datos que se pasarán al componente
const Card = (data) => {

    const context = useContext(ShoppingCartContext)

    //destructuramos images, title y price
    const {images, title, price} = data.data;
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                {/*La imgen tiene el mismo alto y ancho que su padre, */}
                {/*object-cover esta propiedad le dice al navegador que la imagen o el video debe cubrir completamente el contenedor en el que se encuentra*/}
                {/*images[0] es la ruta de la imagen, que se obtiene dinámicamente desde el primer elemento ([0]) del array images dentro del objeto data.data*/}
                <img className='w-full h-full object-cover rounded-lg' src={images[0]} alt={title}/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' 
                onClick={() => context.setCount(context.count + 1)}> {/*context.setCount(context.count + 1) incrementa el valor de count en el contexto en 1.*/}
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                {/*title: Accede dinámicamente al valor de title dentro del objeto data.data. Este valor es el texto que se mostrará dentro del span*/}
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </div>
    )
}

export default Card