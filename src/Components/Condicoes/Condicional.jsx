import { useState } from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail("")
    }

    return (
        <div>
            <p>Cadastre seu e-mail</p>
            <form>
                <input type="email" 
                placeholder='Digite seu e-mail'
                onChange={(e)=> setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                        <p>O email é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional