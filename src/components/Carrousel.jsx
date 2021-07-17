//Librerias
import React, { Children } from 'react'

//Componentes
import Header from '../components/Header'


//Estilos
import '../assets/styles/components/Carrousel.scss'

const Carrousel = ( { children } ) => {
    return(

        <section class="carousel">
            <div class="carousel__container">
                {children}
            </div>
        </section>

    )
}

export default Carrousel