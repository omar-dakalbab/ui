import React from 'react'
import './style.css'
import bg from './bg.png'
import { NavLink } from 'react-router-dom'
import road from '../../../assets/road.svg'
import benzin from '../../../assets/benzin.svg'
import cara from '../../../assets/cara.svg'

const AdvertCard = (props) => {



    return (
        <div className="fav-card">
            <div className="edit-btn">
                <button><NavLink to={`edit/${props.cardid}`}>Düzenle</NavLink></button>
            </div>
            <img src={bg} alt='' />
            <h3>{props.title}</h3>
            <hr />

            <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <p>{props.location}</p>
            </div>
            <hr />
            <div className="icons">
                <div className="icon">
                    <img src={road} alt="" />
                    <p>{props.road}</p>
                </div>
                <div className="icon">
                    <img src={benzin} alt="" />
                    <p>{props.fuel}</p>
                </div>
                <div className="icon">
                    <img src={cara} alt="" />
                    <p>{props.type}</p>
                </div>
            </div>
        </div>
    )
}

export default AdvertCard
