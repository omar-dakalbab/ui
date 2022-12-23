import React, { useState, useEffect } from 'react'
import Card from '../../HomeComponents/Card/Card'
import './caravancard.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom'




const CaravansCard = (props) => {

    const [user_id, SetUserId] = useState('null')
    const auth = JSON.parse(localStorage.getItem('user'))
    let location = useParams();
    const [carad, SetCardList] = useState([]);
    useEffect(() => {
        if (location) {

            Axios.get(`https://caravinn-test.herokuapp.com/api/caravan/by-location/${props.request}`).then((response) => {
                SetCardList(response.data)
            });
            
        }
        if (auth) {
            SetUserId(auth.id)
        } else {
            SetUserId(null)
        }

    });

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {carad.length === 0 ? (
                <div style={{ margin: '100px' }}>
                    <h1>Sonuç bulunmadı...</h1>
                </div>
            ) : (
                carad.slice(0, props.limit).map((val, key) => {
                    return (
                        <>
                            <div className="caravan-cards" style={{marginBottom: 25}}>
                                <Card userid={user_id} cardid={val.id} img={val.images} title={val.caravan_title} location={val.location} road={val.road} fuel={val.fuel_type} type={val.caravan_type} price={val.price} pr={val.pr} />
                            </div>
                        </>
                    );
                })
            )}
        </div>

    )
}

export default CaravansCard