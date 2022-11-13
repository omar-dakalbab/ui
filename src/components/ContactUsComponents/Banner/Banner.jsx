import React from 'react'
import './banner.css'
import { FiMail } from 'react-icons/fi';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import Logo from './logo.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="flex-1">
                <div className="part">
                    <ul>
                        <li><FiMail style={{ marginRight: 10, fontSize: 18 }} /> info@caravinn.com</li>
                        <li><IoCallOutline style={{ marginRight: 10, fontSize: 18 }} /> +0 (212) 909 40 62</li>
                        <li><IoLocationOutline style={{ marginRight: 10, fontSize: 18 }} />  Esentepe Mah. Talatpaşa Cad. No:5, Şişli, İstanbul</li>
                    </ul>
                </div>
            </div>
            <div className="flex-2">
                <img src={Logo} alt="logo" className='logo' />
            </div>
        </div>
    )
}

export default Banner