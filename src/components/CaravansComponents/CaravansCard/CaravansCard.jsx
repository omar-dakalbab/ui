import React, { useState, useEffect } from 'react'
import Card from '../../HomeComponents/Card/Card'
import './caravancard.css'
import Axios from 'axios'
import caravan from './assets/cara1.png'
import { useParams } from 'react-router-dom'




const CaravansCard = (props) => {
    const [user_id, SetUserId] = useState('null')
    const auth = JSON.parse(localStorage.getItem('user'))
    let location = useParams();

    const [carad, SetCardList] = useState([]);
    useEffect(() => {
        if (location) {
            Axios.get(`http://localhost:3001/api/caravan/by-location/${props.request}`).then((response) => {
                SetCardList(response.data)
            });
        }
        if (auth) {
            SetUserId(auth.id)
        } else {
            SetUserId(null)
        }

    }, []);
    console.log(carad)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {carad.length === 0 ? (
                <div style={{ margin: '100px' }}>
                    <h1>Sounuç bulunmadı...</h1>
                </div>
            ) : (
                carad.slice(0, props.limit).map((val, key) => {
                    return (
                        <>

                            <div className="caravan-cards" >
                                <Card userid={user_id} cardid={val.id} img={caravan} title={val.caravan_title} location={val.location} road={val.road} fuel={val.fuel_type} type={val.caravan_type} price={val.price} />
                            </div>
                        </>
                    );
                })
            )}
        </div>

    )
}

export default CaravansCard