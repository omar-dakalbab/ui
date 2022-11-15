import React, { useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import LeftMenu from '../LeftMenu/LeftMenu'

// Calendar
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect } from 'react';

import Axios from 'axios'

const AdvertEdit = () => {
  const initialState = {
    caravan_title: "",
    road: "",
    fuel_type: "",
    caravan_type: "",
    price: "",
    location: "",
  }
  const nav = useNavigate();
  const [state, setState] = useState(initialState);
  const { caravan_title, road, fuel_type, caravan_type, price, location } = state;

  const { id } = useParams()
  const getCaravan = () => {

    Axios.get(`https://caravinn-test.herokuapp.com/api/caravan/${id}`).then((resp) => {
      setState({ ...resp.data[0] })
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  useEffect(() => {
    getCaravan()

  }, [])
  const caravanDelete = () => {
    Axios.delete(`https://caravinn-test.herokuapp.com/api/caravan/delete/${id}`)
    nav('/profile/adverts')
  }
  const handleSubmit = () => {
    Axios
      .put(`https://caravinn-test.herokuapp.com/api/caravan/update-by-user/${id}`, {
        caravan_title,
        caravan_type,
        road,
        fuel_type,
        price,
        location
      })
      .then((response) => {
        console.log(response)
        setState({ caravan_title: "", caravan_type: "", road: "", fuel_type: "", price: "", location: "" })
      })
    nav('/profile/adverts')
  }
  return (
    <div className='advert-edit'>
      <LeftMenu />
      <div className="advert-edit-content">
        <button id='geri'><NavLink style={{ color: '#FFF' }} to='/profile/adverts'>Geri</NavLink></button>
        <h1>Chevrolet X30 Çekme Karavan</h1>
        <div className="advert-edit-card">
          <button id='delete-button' onClick={caravanDelete}><AiOutlineDelete /></button>
          <span id='card-header'>Karavan Bilgileri</span>

          <input style={{ color: "#000", marginTop: 30 }} id='bedel' onChange={handleChange} value={caravan_title || ""} type="text" name='caravan_title' placeholder='Caravan Title' />
          <input style={{ color: "#000" }} id='bedel' onChange={handleChange} value={caravan_type || ""} type="text" name='caravan_type' placeholder='Caravan Type' />
          <input style={{ color: "#000" }} id='bedel' onChange={handleChange} value={road || ""} name='road' type="text" placeholder='Road' />
          <input style={{ color: "#000" }} id='bedel' onChange={handleChange} value={fuel_type || ""} name='fuel_type' type="text" placeholder='Fuel Type' />
          <input style={{ color: "#000" }} id='bedel' onChange={handleChange} value={price || ""} name='price' type="text" placeholder='Price' />
          <input style={{ color: "#000" }} id='bedel' onChange={handleChange} value={location || ""} name='location' type="text" placeholder='Location' />

          <h3>Hangi günler kullanılsın?</h3>

          <div className='date-calendar'>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDateState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateState}
            />
          </div>

          <button id='kaydet' onClick={handleSubmit}>Kaydet</button>

        </div>

      </div>
    </div>
  )
}

export default AdvertEdit
