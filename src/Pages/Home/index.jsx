import { useState, useEffect } from "react" 
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"


const Home = () => {
    /*const [items, setItems]: Esto define un estado en el componente usando el hook useState. 
    items es la variable de estado que contendrá los datos que se obtienen de la API, 
    y setItems es la función que se utilizará para actualizar ese estado.*/

    /*useState(null): Inicializa items con null. Esto significa que al principio, items no tiene ningún dato.*/
    const[items, setItems] = useState(null)

    /* El hook useEffect se utiliza para realizar efectos secundarios en los componentes funcionales. 
    En este caso, se usa para hacer una llamada a una API cuando el componente se monta.*/
    useEffect(() => {
        /*Se utiliza para hacer una solicitud HTTP a la API de productos de Escuela JS. fetch devuelve una promesa 
        que se resolverá con el objeto Response representando la respuesta a la solicitud.*/
        fetch('https://api.escuelajs.co/api/v1/products')
        /*.then(response => response.json()): Aquí, se toma la respuesta de la API y se convierte en un objeto JSON usando el método .json(), que también devuelve una promesa.*/
        .then(response => response.json())
        /*.then(data => setItems(data)): Una vez que los datos JSON han sido obtenidos, se llama a setItems(data) para actualizar el estado items con los datos recibidos de la API.*/
        .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            {/*max-w-screen-lg: Limita el ancho máximo del contenedor a un valor predeterminado*/}
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                /*items?.map(item => ( ... )): Aquí se utiliza el operador de encadenamiento opcional ?. 
                para asegurarse de que items no es null o undefined antes de intentar mapearlo*/
                /*map(item => ( ... )): Itera sobre cada elemento item en items y devuelve un componente Card para cada uno*/
                items?.map(item => (
                    /*<Card key={item.id} data={item}/>: Renderiza un componente Card para cada item en items. 
                    La propiedad key es importante en React cuando se renderizan listas, ya que ayuda a React a identificar qué 
                    elementos han cambiado, se han agregado o eliminado. La propiedad data se pasa al componente Card para que pueda mostrar la información del producto.*/
                    <Card key={item.id} data={item}/>
                ))
            }
            </div>
        </Layout>
    )
}

export default Home