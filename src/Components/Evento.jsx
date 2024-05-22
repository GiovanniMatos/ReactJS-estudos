import Button from './Eventos/Button'

function Evento({nome}){
    function alertEvent(){
        alert(`Me chamo ${nome}, este é um Evento em props`)
    }
    return (
        <>
        <p>Clique para ativar Evento:</p>
        
        <Button event={alertEvent} text="Ativar"/>
        </>
    )
}

export default Evento