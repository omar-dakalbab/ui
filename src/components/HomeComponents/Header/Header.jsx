import React, { useState } from 'react'
import './header.css'
import Button from '../../Button/Button'
import bg from './assets/bg.svg'
import Navbar from '../../NavBar/Navbar'
import { Link } from 'react-router-dom'
import dateIcon from './assets/dateicon.svg'


const MainHeader = () => {

  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);
  const [inputs, setInputs] = useState({
    location: ""
  })
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [type, setType] = useState('text');
  return (
    <div className='home-header'>
      <Navbar className="navbar" />
      <div className="title-sec">
        <img style={{ opacity: '85%' }} src={bg} alt="" className='title-sec-bg' />
        <div className="te">
          <h1>Maceraya Vınn'lıyoruz..</h1>
          <div className="buttons">
            <Link to={'/kiralik-karavanlar/all'}><Button text="Karavan Kirala" className="btn btn-white" /></Link>
            <Link to={'/kiraya-verin'}><Button text="Karavan kiraya ver" className="btn btn-transparent" /></Link>
          </div>
          <div className="searchBar">
            <input id="mainInput" onChange={handleChange} name="location" type="text" placeholder="Nereden almak istersin?" />
            <span id="line"></span>
            <div className="dateInput">
              <input id="datePicker" type={type}
                onFocus={() => setType('date')}
                onBlur={() => setType('text')}
                placeholder='Alış tarihi' />
              <img src={dateIcon} />
            </div>
            <span id="line"></span>
            <div className="dateInput">
              <input id="datePicker2" type={type}
                onFocus={() => setType('date')}
                onBlur={() => setType('text')}
                placeholder='Dönüş tarihi' />
              <img src={dateIcon} />  
            </div>
            <div className="button vinn">
              <Link to={`/kiralik-karavanlar/${inputs.location}`}><Button text="Vınn'la" className="btn btn-blue-big" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader