import React, { useEffect } from 'react'
import './phonesection.css'
import Background from './assets/background.svg'
import Phone from './assets/phone.svg'
import leftPlant from './assets/left-plant.svg'
import rightPlant from './assets/right-plant.svg'
import leftArrow from './assets/left-arrow.svg'
import rightArrow from './assets/right-arrow.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhoneSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='phoneSection' style={{ position: 'relative' }}>
      <img src={leftPlant} className="leftPlant" id='img' alt='left-vector-plant' />
      <img src={rightPlant} className="rightPlant" id='img' alt='right-vector-plant' />
      <img src={Background} width='100%' id='img' alt='background-img' />
      <div className="content">
        <div
          data-aos-duration="1600"
          data-aos-delay="50"
          data-aos="fade-right"
          className="left-menu">
          <ul>
            <li >Kayıt Ol</li>
            <li className='active'>Karavanı Seç</li>
            <li>Kullanmaya Başla</li>
            <li>Kiralamayı Bitir</li>
          </ul>
          <br />
          <h1 style={{ color: '#2689B2'}}>Karavanı Seç</h1>
          <h1 style={{ color: '#196CA5' }}>Kiralamaya Başla</h1>
          <p>Sana en yakın karavanlar arasından ihtiyacına uygun karavanı
            seçerek kiralamasını hemen başlatabilirsin.</p>
          <br />
        </div>
        <div
          data-aos-duration="1600"
          data-aos-delay="50"
          data-aos="fade-left"
          className="right-menu"
        >
          <img src={Phone} alt="phone" className='phone' />
          <img src={leftArrow} alt="leftArrow" className='leftArrow' />
          <img src={rightArrow} alt="rightArrow" className='rightArrow' />
        </div>
      </div>


    </div>
  )
}

export default PhoneSection
