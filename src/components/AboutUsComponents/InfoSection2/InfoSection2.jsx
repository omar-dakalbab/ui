import React from 'react'
import bg from './bg.png'

const InfoSection2 = () => {
    return (
        <div className='info-section-main'>

            <div className="info-section-text">
                <h2>
                    Sadece kendine güvenenler için
                    oluşturulmuş bir organizasyon
                </h2>
                <p>
                    Karavanla seyahat etme kararını alır almaz
                     yapmanız gerek ilk şeylerden biri de bütçenize
                      ve kişisel tercihinize uygun karavanı seçmek...
                </p>
            </div>
            <img src={bg} alt="bg" />
        </div>
    )
}

export default InfoSection2
