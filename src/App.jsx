import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


// Router 
import Home from './pages/Home'
import Contato from './pages/Contato'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/contato" element={ <Contato /> } />
          </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
