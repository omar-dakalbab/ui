import React, { useEffect } from 'react'
import './caravankiralasection.css'
import phoneMockup from './assets/phoneMockup.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const CaravanKiralaSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='karavanKirala'>
            {/* <img src={Background} id='img' width='100%' height='820px' alt='background' /> */}
            <div className="content">
                <div data-aos-duration="1600" data-aos-delay="200" data-aos="fade-up" className="left-menu">
                    <img src={phoneMockup} id="mockup" alt="phoneMockup" />
                </div>
                <div data-aos-duration="1600" data-aos-delay="200" data-aos="fade-up" className="right-menu">
                    <h1>Karavan Kiralamak
                        İstiyorum</h1>
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
                            <h3>Karavanınızı değerleyin</h3>
                            <p>Karavan bilgilerinizi girin ve anında ön değerlemenizi alın</p>
                        </div>
                    </div>
                    <div className="item">
                        <span id="circle">3</span>
                        <div className="text">
                            <h3>Karavanınızı değerleyin</h3>
                            <p>Karavan bilgilerinizi girin ve anında ön değerlemenizi alın</p>
                        </div>
                    </div>
                    <Link to={'/kiralik-karavanlar'}><button className="btn btn-transparent ed">Hemen Kirala</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CaravanKiralaSection
