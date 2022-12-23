import React, { useState, useEffect } from 'react'
import './style.css'
import bg from './bg.png'
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { DateRange } from 'react-date-range';

const CaravanReserveComp = ({ onChange }) => {
  // ID OF CARAVAN
  const { id } = useParams()
  const [caravan, SetCaravan] = useState([]);
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  
  useEffect(() => {
    axios.get(`http://104.247.164.103/api/caravan/${id}`).then((response) => {
      SetCaravan(response.data)
    })
    caravan.map((val, key) => {
      setMinDate(moment(val.startDate).format('MM-DD-YYYY'))
      setMaxDate(moment(val.endDate).format('MM-DD-YYYY'))
    })
  })
 
  const [state, setState] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection"
    }
  ]);
  const [inputs, setInputs] = useState([
    {
      description: "",
    }
  ])
  const handleOnChange = (ranges) => {
    const { selection } = ranges;
    setState([selection]);
  };
  return (
    <div className='karavan-reserve-comp'>
      <div className="karavan-reserve-left">
        <span id='title'>Karavanınızı</span>
        <h1>Kiralıyorsunuz</h1>
        <p>Hangi günler Kullanıcaksınız?</p>

        {/* DEVELOPMENT TEST */}
        {/* {minDate + " : " + maxDate} */}

        <div className='date-calendar'>
          <DateRange
            onChange={handleOnChange}
            months={2}
            ranges={state}
            direction="horizontal"
            minDate={new Date(minDate)}
            maxDate={new Date(maxDate)}
          />
        </div>
        <p style={{ marginBottom: 15 }}>Açıklama Girin</p>
        <textarea id='aciklama' name="description" placeholder='Açıklama Girin'></textarea>
        <button id="devam">
          {state.endDate ?
            <Link to={`/caravan-rezerve/ek-urunler/${id}`} state={{ from: inputs }} style={{ color: '#FFF' }}>
              Devam
            </Link>
            :
            <p>Enter your details first...  </p>
          }
        </button>
      </div>
      {
        caravan === [] ? (
          <h1>Loading...</h1>
        ) : (
          caravan.map((val, key) => {
            return (
              <div className="karavan-reserve-right">
                <img src={bg} alt="" />
                <h3>{val.caravan_title}</h3>
                <div className="reserve-icons">
                  <span><EditRoadOutlinedIcon className='icon-caravan' />{val.road}</span>
                  <span><LocalGasStationOutlinedIcon className='icon-caravan' />{val.fuel_type}</span>
                  <span><RvHookupOutlinedIcon className='icon-caravan' />{val.caravan_type}</span>
                  <span><LocationOnOutlinedIcon className='icon-caravan' />{val.location}</span>
                  <span><CurrencyLiraOutlinedIcon className='icon-caravan' />{val.price}</span>
                </div>
                <hr />
                <span id='price'>{val.price} <CurrencyLiraOutlinedIcon id='icon-price' /></span>
              </div>
            )
          })
        )
      }
    </div >
  )
}

export default CaravanReserveComp
