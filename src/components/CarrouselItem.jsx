//Librerias
import React from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'

//Estilos
import '../assets/styles/components/CarrouselItem.scss'

// 

const CarrouselItem = () =>{
    return(
        <div class="carousel-item">
            <img class="carousel-item__img" src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" alt=""/>
            <div class="carousel-item__details">
                <div>             
                    <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon"/>
                    <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon"/>
                </div>
                <p class="carousel-item__details--title">Título descriptivo</p>
                <p class="carousel-item__details--subtitle">2019 16 + 114 minutos</p>
            </div>
         </div>
    )
}

export default CarrouselItem;