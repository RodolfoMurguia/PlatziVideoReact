//Librerias
import React from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'

//Estilos
import '../assets/styles/components/Footer.scss'

const Footer =() =>{
    return(

        <footer className="footer">
            <a href="/">Terminos de uso</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>

    )
}

export default Footer