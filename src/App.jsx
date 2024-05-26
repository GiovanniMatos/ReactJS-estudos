import './App.css'
import Carros from './Components/Carros'
import Evento from './Components/Evento'
import EventForm from './Components/EventForm'
import Condicional from './Components/Condicoes/Condicional'
import SeuNome from './Components/StateLift/SeuNome'
import Saudacao from './Components/StateLift/Saudacao'
import { useState } from 'react'

function App() {

  const [nome, setNome] = useState()

  return (
      // Contém props - PropTypes - defaultProps - Events
      <div>
        <h2>Lista de Carros</h2>
        <p>Contém props - PropTypes - defaultProps</p>
        <Carros marca="Honda" modelo="Civic" cor="prata"/>
        <Carros marca="Chevrollet" modelo="Cobalt" cor="preto"/>
        <Carros modelo="Civic" cor="prata"/><br/>
        <hr/>

        <h2>Contém Eventos | useState</h2>
        <Evento nome="Giovanny Matos"/><br/>
        
        <h3>Evento onSubmit</h3>
        <EventForm /><br/><hr/>

        <h2>Contém Estruturas Condicionais</h2>
        <Condicional /><br/><hr/>

        <SeuNome setNome={setNome} />
        <Saudacao nome={nome} />
      </div>
  )
}

export default App
