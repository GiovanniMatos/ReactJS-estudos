import PropType from 'prop-types';

function Carros({marca, modelo, cor}){
    return(
        <li>
            {marca} - {modelo} - {cor}
        </li>
    )
}

Carros.propType = {
    marca: PropType.isRequired
}

Carros.defaultProps = {
    marca: "Marca não definida"
}

export default Carros