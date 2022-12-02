import React from 'react'
import './aboutheader.css'
import logo from './logo.png'
const AboutHeader = () => {
  return (
    <div className='about-header'>
        <h1>Hakkımızda</h1>
        <img src={logo} alt="" />
    </div>
  )
}

export default AboutHeader
