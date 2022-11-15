import React from 'react'
import './header.css'

import caravanGroup from './assets/caravan-group.svg'
const Header = () => {
    return (
        <div className='give-rent-header'>
            <div className="flex-1">
                <div className="text-1">
                    <h1>Karavanımı nasıl <br />Kiraya Veririm?</h1>
                    <h3>Caravınn ile Karavan Partnerliği</h3>
                </div>
                <div className="text-2">
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk
                        şeylerden biri de bütçenize ve kişisel
                        tercihinize uygun karavanı seçmek olacaktır.</p>
                </div>
            </div>
            <div className="flex-2">
                <img src={caravanGroup} alt="byIMG" className='cycle-img' />
            </div>
        </div>
    )
}

export default Header
