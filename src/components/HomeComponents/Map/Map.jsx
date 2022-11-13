import React from 'react'
import './map.css'
import MapOfTurkey from './assets/map.png'
const Map = () => {
    return (
        <div className='map'>
            <h1>Nerelerde</h1>
            <h1>Varız?</h1>
            <img src={MapOfTurkey} alt="" />
        </div>
    )
}

export default Map
