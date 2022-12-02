import React, { useEffect } from 'react'
import './giverent.css'

import Profile from './assets/photo.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const GiveRent = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='giveRent'>
            <div className="content">
                <div
                    data-aos-duration="1600"
                    data-aos-delay="50"
                    data-aos="fade-right"
                    className="left-menu"
                >
                    <h1>Karavan Kiralatmak</h1>
                    <h1>İstiyorum</h1>
                    <div className="item">
                        <span id="circle">1</span>
                        <div className="text">
                            <h3>Karavanınızı değerleyin</h3>
                            <p>Karavan bilgilerinizi girin ve anında ön değerlemenizi alın</p>
                        </div>
                    </div>
                    <div className="item">
                        <span id="circle">2</span>
                        <div className="text">
                            <h3>Ücretsiz ekspertiz yaptırın</h3>
                            <p>Karavan bilgilerinizi girin ve anında ön değerlemenizi alın</p>
                        </div>
                    </div>
                    <div className="item">
                        <span id="circle">3</span>
                        <div className="text">
                            <h3>Karavanınızı değerleyin</h3>
                            <p>Hızlı ve güvenli ödeme garantisi ile paranız anında hesabınızda</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to={'/kiraya-verin'}><button className="btn btn-blue-small">Hemen Kiralat</button></Link>
                        <Link to={'/bize-ulasin'}><button className="btn btn-transparent-blue">Biz Halledelim</button></Link>
                    </div>
                </div>
                <div data-aos-duration="1600" data-aos-delay="50" data-aos="fade-left" className="right-menu">
                    <img src={Profile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GiveRent
