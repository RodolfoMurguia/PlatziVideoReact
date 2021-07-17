//Librerias
import React from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'

//Estilos
import '../assets/styles/components/Category.scss'

const Category = ({ children }) =>{
    return(
        <div className="categories">
            <h3 className="categories__title">Mi lista</h3>
            {children}
        </div>
    )
}

export default Category