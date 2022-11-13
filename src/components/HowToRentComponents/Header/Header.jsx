import React from 'react'
import './header.css'
import headerbg from './assets/header-bg.svg'
const Header = () => {
    return (
            <div className="howtorent-header">
                <img className='headerbg' src={headerbg} alt="" />
                <div className="header-content">
                    <div className="header-left">
                        <h1>Nasıl <br /> Kiralarım?</h1>
                    </div>
                    <div className="header-right">
                        <span id='text-small'>Caravınn ile Karavan Partnerliği</span>
                        <span id='text-medium'>Yapmanız Gerekenler Çok Basit, Adım adım..</span>
                        <span id='text-small'>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk
                            şeylerden biri de bütçenize ve kişisel tercihinize uygun karavanı seçmek olacaktır.</span>
                    </div>
                </div>
            </div>
    )
}

export default Header
