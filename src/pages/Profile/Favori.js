import React from 'react'
import Header from '../../components/Profile/Header/Header'
import FavoriPanel from '../../components/Profile/FavoriPanel/FavoriPanel'



const Favori = () => {
    return (
        <div className='profile' style={{ backgroundColor: '#F5F5F5' }}>
         
            <Header text="Favorilerim"/>
            <FavoriPanel />
            

        </div>
    )
}

export default Favori
