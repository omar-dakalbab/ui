import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import bg from './bg.png'
import { BsCalendar2Date } from 'react-icons/bs'
import { ImRoad } from 'react-icons/im'
import { IoLocationOutline } from 'react-icons/io5'
import { FaCaravan } from 'react-icons/fa'
import { GiFuelTank } from 'react-icons/gi'

const RentedCard = (props) => {
    const [carad, SetCardList] = useState([]);

    const getCaravan = () => {
        axios.get(`http://104.247.164.103/api/caravan/${props.cardid}`).then((response) => {
            SetCardList(response.data);
        })
    }
    useEffect(() => {
        getCaravan()
    }, [])
    return (
        <div className="rented-caravan-card profile-panel">
            {carad === [] ? (
                <h1>Loading...</h1>
            ) : (
                carad.slice(0, props.limit).map((val, key) => {
                    return (
                        <>
                            <img src={bg} alt="" />
                            <div className="rent-content">
                                <h3>{val.caravan_title}</h3>
                                <hr />
                                <div className="caravan-details">
                                    <span><IoLocationOutline className="date-icon" />{val.location}</span>
                                    <span><ImRoad className="date-icon" />{val.road}</span>
                                    <span><GiFuelTank className="date-icon" />{val.fuel_type}</span>
                                    <span><FaCaravan className="date-icon" />{val.caravan_type}</span>
                                </div>
                                <hr />
                                <div className="rented-date">
                                    <span><BsCalendar2Date className='date-icon' /> Başlangıç <p>{props.startDate}</p></span>
                                    <span style={{ marginLeft: 55 }}><BsCalendar2Date className='date-icon' />Bitiş <p>{props.endDate}</p></span>
                                </div>
                            </div>
                        </>
                    );
                })
            )}
        </div>
    )
}

export default RentedCard
