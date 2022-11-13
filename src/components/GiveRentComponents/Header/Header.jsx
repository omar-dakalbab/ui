import React from 'react'
import './header.css'
import byImg from './assets/cycle-img.png'
const Header = () => {
    return (
        <div className='give-rent-header'>
            <div className="flex-1">
                <div className="text-1">
                    <h1>Karavanımı nasıl <br />Kiraya Veririm?</h1>
                    <p>Caravınn ile Karavan Partnerliği</p>
                </div>
                <div className="text-2">
                    <h2>Yapmanız Gerekenler Çok <br /> Basit, Adım adım..</h2>
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk
                        şeylerden biri de bütçenize ve kişisel
                        tercihinize uygun karavanı seçmek olacaktır.</p>
                </div>
            </div>
            <div className="flex-2">
                <img src={byImg} alt="byIMG" className='cycle-img' />
            </div>
        </div>
    )
}

export default Header
