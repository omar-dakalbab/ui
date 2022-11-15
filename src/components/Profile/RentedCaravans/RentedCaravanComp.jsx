import React, { useContext, useState, useEffect } from 'react'
import Axios from 'axios'
import { AuthContext } from '../../../context/authContext'
import LeftMenu from '../LeftMenu/LeftMenu'
import RentedCard from './RentedCard'
import './style.css'
import { Link } from 'react-router-dom'
const RentedCaravanComp = (props) => {

  const { currentUser } = useContext(AuthContext)
  const [carad, SetCardList] = useState([]);
  const getRentedCaravan = (props) => {

    Axios.get(`https://caravinn-test.herokuapp.com/api/caravan/rented-user-id/${currentUser.id}`).then((response) => {
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

        <button id='button-1'>Mevcut Kiraladılarım</button>
        <Link to={'/profile/rented-history'}><button id='button-2'>Geçmiş Kiraladılarım</button></Link>
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

export default RentedCaravanComp
