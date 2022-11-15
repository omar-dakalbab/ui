import React, { useEffect, useState } from 'react'
import LeftMenu from '../LeftMenu/LeftMenu'
import FavCard from './FavCard'
import Axios from 'axios'
import caravan from './cara1.png'
const FavoriPanel = (props) => {
    
    const auth = JSON.parse(localStorage.getItem('user'))

    const [carad, SetCardList] = useState([]);

    const getLike = () => {
        Axios.get(`http://localhost:3001/api/like/${auth.id}`).then((response) => {
            SetCardList(response.data)
        })
    }

    useEffect(() => {
       getLike()
    }, [])


    return (
        <div className='fav-panel'>
            <LeftMenu />
            <div className="fav-panel-content" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {carad === [] ? (
                    <h1>Loading...</h1>
                ) : (
                    carad.slice(0, props.limit).map((val, key) => {
                        return (
                            <div className="caravan-cards">
                                <FavCard cardid={val.id} img={caravan} title={val.caravan_title} location={val.location} road={val.road} fuel={val.fuel_type} type={val.caravan_type} />
                            </div>
                        );
                    })
                )}
            </div>
        </div >
    )
}

export default FavoriPanel
