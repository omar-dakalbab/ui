import React, { useState, useEffect } from 'react'
import './style.css'
// Calendar
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import bg from './bg.png'
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios'
import moment from 'moment'

const CaravanReserveComp = () => {
  var curr = new Date();

  const { id } = useParams()

  const [caravan, SetCaravan] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [err, SetErr] = useState();
  const [inputs, setInputs] = useState({
    description: "",
    startDate: "",
    endDate: "",
  })
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {




    Axios.get(`http://localhost:3001/api/caravan/${id}`).then((response) => {
      SetCaravan(response.data)
    })
    setStartDate(moment(dateStart).format('L'))
    setEndDate(moment(dateEnd).format('L'))

    setInputs({
      description: inputs.description,
      startDate: startDate,
      endDate: endDate,
    })

  })
  const [state, setState] = useState([
    {
      startDate: curr,
      endDate: curr,
      key: 'selection'
    }
  ]);
  const dateStart = state[0].startDate

  const dateEnd = state[0].endDate


  return (
    <div className='karavan-reserve-comp'>
      <div className="karavan-reserve-left">
        <span id='title'>Karavanınızı</span>
        <h1>Kiralıyorsunuz</h1>
        <p>Hangi günler Kullanıcaksınız?</p>
        <p>{err && err}</p>
        <div className='date-calendar'>
          <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
        <p style={{ marginBottom: 15 }}>Açıklama Girin</p>
        <textarea onChange={handleChange} id='aciklama' name="description" placeholder='Açıklama Girin'></textarea>
        <button id="devam">
          {dateEnd ?
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
