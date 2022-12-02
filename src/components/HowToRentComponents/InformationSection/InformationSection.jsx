import React from 'react'
import './informationsection.css'
import Button from '../../Button/Button'
import bg from './assets/bg.svg'
import hand from './assets/location-icon.png'
import { Link } from 'react-router-dom'
const InformationSection = () => {
    return (
        <div className='information-section'>
            <img className='information-section-bg' src={bg} alt="" />
            <div className="flex">
                <div className="flex-1">
                    <h1>Dikkat Etmeniz Gereken Konular</h1>
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
                    <br />
                    <Link to={'/kiralik-karavanlar'}> <button className="btn btn-transparent ed">Hemen Kirala</button></Link>
                </div>
                <div className="flex-2">
                    <img className='information-hand-img' src={hand} alt="" />
                </div>
            </div>
        </div>
    )
}

export default InformationSection
