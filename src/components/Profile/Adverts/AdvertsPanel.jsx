import React, { useState, useEffect } from 'react'
import LeftMenu from '../LeftMenu/LeftMenu'
import './style.css'

import AdvertCard from './AdvertCard'
import { AuthContext } from '../../../context/authContext'
import { useContext } from 'react'
import Axios from 'axios'
import caravan from './cara1.png'
const AdvertsPanel = (props) => {

  const { currentUser } = useContext(AuthContext)

  const [carad, SetCardList] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/caravan/user-id/${currentUser.id}`).then((response) => {
      SetCardList(response.data)
    });
  }, []);
  return (
    <div className='fav-panel'>
      <LeftMenu />
      <div className="fav-panel-content">
        {carad === [] ? (
          <h1>Loading...</h1>
        ) : (
          carad.slice(0, props.limit).map((val, key) => {
            return (
              <AdvertCard cardid={val.id} img={caravan} title={val.caravan_title} location={val.location} road={val.road} fuel={val.fuel_type} type={val.caravan_type} />
            );
          })
        )}
      </div>
    </div>
  )
}

export default AdvertsPanel

