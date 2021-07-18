//Librerias
import React from 'react'

//Componentes
import Header from '../components/Header'
import Search from '../components/Search'

//Estilos
import '../assets/styles/components/Category.scss'

const Category = ({ children, title }) =>{
    return(
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    )
}

export default Category