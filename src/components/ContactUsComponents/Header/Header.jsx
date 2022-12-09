import React from 'react'
import './header.css'
import map from './map.svg'

const Header = () => {
    return (
        <div className='contact-us-header'>
            <div className="title">
                <h1>Bize Ulaşın</h1>
                <p>7 / 24 bize hızlı bir şekilde
                    ulaşabilirsiniz.</p>
            </div>
            <div className="contact-section" style={{padding: '0px 50px'}}>
                <div className="flex-1">
                    <form action="">
                        <input type="text" placeholder='Adınız' />
                        <input type="text" placeholder='Eposta Adresiniz' />
                        <textarea type="message" placeholder='Mesajınız' />
                        <input type="submit" value='Gönder' />
                    </form>
                </div>
                <div className="flex-2">
                    <img src={map} alt="map" style={{ maxWidth: '100%'  }} className='map-img'/>
                </div>
            </div>
        </div>
    )
}

export default Header