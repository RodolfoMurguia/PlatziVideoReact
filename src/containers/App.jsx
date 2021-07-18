//Librerias
import React, {useEffect, useState}  from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'
import Category from '../components/Category'

import CarrouselItem from '../components/CarrouselItem'
import Carrousel from '../components/Carrousel'

import Footer from '../components/Footer'

import useInitialState from '../hooks/useInitialState'

//Estilos
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'


const App = () => {

    //Espacio para logica

    const initialState = useInitialState(API)

    return (
        <div className="App" >
            <Header/>
            <Search/>

            {initialState.mylist?.length > 0 &&

                <Category title="Favoritos">
                <Carrousel>
                    <CarrouselItem></CarrouselItem>
                </Carrousel>
                </Category>
                
            }

            
            <Category title="Tendencias">
                <Carrousel>
                    {initialState.trends?.map(item =>
                    
                        <CarrouselItem key={item.id} {...item}/>
                    
                    )}
                </Carrousel>
            </Category>

            
            <Category title="Pendientes de ver">
                <Carrousel>
                    {initialState.originals?.map(item =>
                    
                        <CarrouselItem key={item.id} {...item}/>
                    
                    )}
                </Carrousel>
            </Category>
            <Footer/>       
        </div>
    )
}

export default App
