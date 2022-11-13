import React from 'react'
import bg from './bg.png'
import './info-section.css'

const InfoSection = () => {
    return (
        <div className='info-section-2-main'>
            <img src={bg} alt="bg" />
            <div className="info-section-text">
                <h2>
                    Değerleri önemsiyoruz
                    Geleceğe Yön veriyoruz..
                </h2>
                <p>
                    Karavanla seyahat etme kararını alır
                    almaz yapmanız gerek ilk şeylerden
                    biri de bütçenize ve kişisel
                    tercihinize uygun karavanı
                    seçmek olacaktır. Gideceğiniz
                    yere, izleyeceğiniz rotaya
                    ve kişi sayısına göre karavanınızı
                    seçmek en ideali. Karavan seçerken
                    sadece satın alma değil..
                </p>
            </div>
        </div>
    )
}

export default InfoSection
