import React from 'react'
import './aboutheader.css'
import bg from './bg.svg'
import logo from './logo.png'
const AboutHeader = () => {
  return (
    <div  style={{position: 'relative', height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{fontSize: '2.5vw', color: '#FFF'}}>Hakkımızda</h1>
        <img src={logo} alt="" />
    </div>
  )
}

export default AboutHeader
