//Librerias
import React from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'
import Category from '../components/Category'

//Estilos
import '../assets/styles/App.scss'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <Category/>
        </div>
    )
}

export default App
