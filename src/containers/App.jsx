//Librerias
import React from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'
import Category from '../components/Category'

import CarrouselItem from '../components/CarrouselItem'
import Carrousel from '../components/Carrousel'

import Footer from '../components/Footer'

//Estilos
import '../assets/styles/App.scss'


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Search/>


            <Category>
                <Carrousel>
                    <CarrouselItem></CarrouselItem>
                    <CarrouselItem></CarrouselItem>
                    <CarrouselItem></CarrouselItem>
                    <CarrouselItem></CarrouselItem>
                    <CarrouselItem></CarrouselItem>
                    <CarrouselItem></CarrouselItem>
                </Carrousel>
            </Category>

            <Footer/>
           

        </div>
    )
}

export default App
