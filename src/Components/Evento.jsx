function Evento({nome}){
    return (
        <>
        <p>Clique para ativar Evento:</p>
        <button onClick={()=>{alert(`Olá ${nome}, primeiro Alert com React :)`)}}>Ativar!</button>
        </>
    )
}

export default Evento