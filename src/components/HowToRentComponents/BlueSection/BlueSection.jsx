import React from 'react'
import './bluesection.css'
import bus from './assets/bus.svg'
const BlueSection = () => {
    return (
        <div className="blue-section">
            <div className="flex">
                <div className="flex-1">
                    <img className='blue-section-img' src={bus} alt="bus" />
                </div>
                <div className="flex-2">
                    <h1>1000'den fazla karavan ile <br /> içinden istediğinizi kiralayın</h1>
                    <br />
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk <br /> şeylerden biri de bütçenize
                        ve kişisel tercihinize uygun <br /> karavanı seçmek olacaktır.
                        Gideceğiniz yere, izleyeceğiniz <br /> rotaya ve kişi sayısına göre karavanınızı seçmek en ideali. <br />
                        Karavan seçerken sadece satın alma değil..</p>
                </div>
            </div>
        </div>
    )
}

export default BlueSection
