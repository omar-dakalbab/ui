import React, { useState } from 'react'
import './cards.css'
import CaravansCard from '../../CaravansComponents/CaravansCard/CaravansCard'
import { Link } from 'react-router-dom';

const Cards = () => {
    const [buttonColors, setButtonColors] = useState({
        color1: "btn btn-blue",
        color2: "btn btn-transparent-blue",
        color3: "btn btn-transparent-blue",
    });

    return (
        <>
            <div className="buttons-2">

                <div className="left-buttons">
                    <button
                        onClick={() => {
                            setButtonColors({
                                color1: "btn btn-blue",
                                color2: "btn btn-transparent-blue",
                                color3: "btn btn-transparent-blue"
                            })
                        }}
                        className={buttonColors.color1}>
                        Tümü
                    </button>
                    <button
                        onClick={() => {
                            setButtonColors({
                                color2: "btn btn-blue",
                                color1: "btn btn-transparent-blue",
                                color3: "btn btn-transparent-blue"
                            })
                        }}
                        className={buttonColors.color2}>
                        Moto Karavan
                    </button>
                    <button
                        onClick={() => {
                            setButtonColors({
                                color3: "btn btn-blue",
                                color2: "btn btn-transparent-blue",
                                color1: "btn btn-transparent-blue"
                            })
                        }}
                        className={buttonColors.color3}>
                        Çekme Karavan
                    </button>
                </div>
                <div className="right-buttons">
                    <Link to={'/kiralik-karavanlar/all'}><button className='btn btn-transparent-blue'>Tümünü Gör</button></Link>
                </div>
            </div>

            <div className="cards">
                <CaravansCard limit="4" request="all"/>
            </div>
        </>
    )
}

export default Cards