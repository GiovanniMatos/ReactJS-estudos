import { useState } from 'react'

function EventForm(){

    function cadastrar(event){
        event.preventDefault() // evita o comportamento padrão de um evento de envio (que seria redirecionar)
        console.log(`Usuário: ${name}\nSenha: ${password}`)
    }

    const [name, setName] = useState("Giovanny Matos")
    const [password, setPassword] = useState()

    return (
        <>
        <form onSubmit={cadastrar}>
            <input
             type="text" 
             name="name"
             placeholder="Digite seu nome"
             value= {name}
             onChange={(e) => setName(e.target.value)}/>
            <input
             type="password"
             name="password" 
             placeholder="Digite sua senha"
             onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}

export default EventForm