import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/NavBar/NavbarWhite'
import bg from './error.png'
const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="err-page-content" style={{ display: 'flex', flexDirection: 'column', height: '50vh', alignItems: 'center', justifyContent: 'center' }}>
        <img src={bg} alt="bg" />
        <br />
        <h1>Üzgünüm böyle bir
          sayfa yok</h1>
        <br />
        <Link to={"/"}><Button text="Anasayfaya Dön" className="btn btn-blue"/></Link>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound