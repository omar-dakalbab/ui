import React from 'react'
import './header.css'
import bg from './bg.svg'



const Header = () => {

    return (
        <div className="caravans-header">
            <img src={bg} alt="" />
            <h1>Tüm Karavanlar</h1>
        </div>
    )
}

export default Header