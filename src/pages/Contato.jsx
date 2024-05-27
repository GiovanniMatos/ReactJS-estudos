import styles from './Navbar.module.css'
import Navbar from '../Components/Navbar/Navbar'

function Contato(){
    return (
        <div className={styles.fundo}>
            <h1>Pagina "Contato"</h1>
            <Navbar />
            <p>Conteúdo</p>
        </div>
    )
}

export default Contato