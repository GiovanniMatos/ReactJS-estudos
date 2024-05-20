function EventForm(){

    function cadastrar(event){
        event.preventDefault() // evita o comportamento padrão de um evento de envio (que seria redirecionar)
        console.log("usuário cadastrado")
    }

    return (
        <>
        <form onSubmit={cadastrar}>
            <input type="text" placeholder="Digite seu nome"/>
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}

export default EventForm