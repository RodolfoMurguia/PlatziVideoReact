//Librerias
import React, { Children } from 'react'

//Componentes
import Header from '../components/Header'


//Estilos
import '../assets/styles/components/Carrousel.scss'

const Carrousel = ( { children } ) => {
    return(

        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>

    )
}

export default Carrousel