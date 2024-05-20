import './App.css'
import Carros from './Components/Carros'
import Evento from './Components/Evento'
import EventForm from './Components/EventForm'
function App() {
  return (
      // Contém props - PropTypes - defaultProps - Events
      <div>
        <h2>Lista de Carros</h2>
        <p>Contém props - PropTypes - defaultProps</p>
        <Carros marca="Honda" modelo="Civic" cor="prata"/>
        <Carros marca="Chevrollet" modelo="Cobalt" cor="preto"/>
        <Carros modelo="Civic" cor="prata"/><br/>
        <hr/>

        <h2>Contém Eventos</h2>
        <Evento nome="Giovanny Matos"/><br/>
        <h3>Evento onSubmit</h3>
        <EventForm />
      </div>
  )
}

export default App
