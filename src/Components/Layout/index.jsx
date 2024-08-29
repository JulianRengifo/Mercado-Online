import PropTypes from 'prop-types';

//Layout es un componente funcional que recibe children como una prop
//children representa cualquier contenido o componente hijo que se pase dentro del componente Layout
const Layout = ({children}) => {
    return (
        <div className='flex flex-col items-center mt-20'>
            {/* Este es el lugar donde se renderiza el contenido o los componentes hijos que fueron 
            pasados al componente Layout. Esto significa que cualquier cosa que envuelvas dentro del 
            Layout en tu JSX aparecerá dentro de este div con las clases mencionadas*/}
            {children}
        </div>
    )
}

/*PropTypes, que es una forma de especificar qué tipos de props espera tu componente. Esto es útil para 
asegurarte de que el componente recibe los datos correctos y facilita el mantenimiento y la detección de errores.*/
Layout.propTypes = {
    /*PropTypes.node: Esto valida que children puede ser cualquier cosa que React pueda renderizar, incluyendo números, cadenas, elementos, o arrays de estos tipos.*/
    /*isRequired: Esto indica que la prop children es obligatoria.*/
    children: PropTypes.node.isRequired,
};

export default Layout