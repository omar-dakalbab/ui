import React, { useContext, useState, useEffect } from 'react'
import Axios from 'axios'
import { AuthContext } from '../../../context/authContext'
import LeftMenu from '../LeftMenu/LeftMenu'
import RentedCard from './RentedCard'
import './style.css'
import { Link } from 'react-router-dom'
const RentedHistory = (props) => {
    const { currentUser } = useContext(AuthContext)
    const [carad, SetCardList] = useState([]);
    const getRentedCaravan = () => {

        Axios.get(`https://caravinn-test.herokuapp.com/api/caravan/rented-history-id/${currentUser.id}`).then((response) => {
            SetCardList(response.data)
        })

    }



    useEffect(() => {
        getRentedCaravan()
    }, [])
    return (
        <div className='rented-caravan'>
            <LeftMenu />
            <div className="rented-caravan-content">

                <Link to={'/profile/rented-caravans'}><button id='button-2'>Mevcut Kiraladılarım</button></Link>
                <button id='button-1'>Geçmiş Kiraladılarım</button>
                {carad === [] ? (
                    <h1>Loading...</h1>
                ) : (
                    carad.slice(0, props.limit).map((val, key) => {
                        return (
                            <div>
                                <RentedCard cardid={val.caravanId} startDate={val.startDate} endDate={val.endDate} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}

export default RentedHistory
