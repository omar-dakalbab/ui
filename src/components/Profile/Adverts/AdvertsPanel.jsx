import React, { useState, useEffect } from 'react'
import LeftMenu from '../LeftMenu/LeftMenu'
import './style.css'

import AdvertCard from './AdvertCard'
import { AuthContext } from '../../../context/authContext'
import { useContext } from 'react'
import axios from 'axios'
import caravan from './cara1.png'
const AdvertsPanel = (props) => {

  const { currentUser } = useContext(AuthContext)
  const [carad, SetCardList] = useState([]);
  useEffect(() => {
    axios.get(`http://104.247.164.103/api/caravan/user-id/${currentUser.id}`).then((response) => {
      SetCardList(response.data)
    });
  }, []);
  return (
    <div className='fav-panel '>
      <LeftMenu />
      <div className="fav-panel-content">
        {carad === [] ? (
          <h1>Loading...</h1>
        ) : (
          carad.slice(0, props.limit).map((val, key) => {
            return (
              <AdvertCard cardid={val.id} img={caravan} title={val.caravan_title} location={val.location} road={val.road} fuel={val.fuel_type} type={val.caravan_type} price={val.price} pr={val.pr}/>
            );
          })
        )}
      </div>
    </div>
  )
}

export default AdvertsPanel

