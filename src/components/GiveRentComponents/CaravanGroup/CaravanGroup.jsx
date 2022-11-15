import React from 'react'
import './caravangroup.css'

const CaravanGroup = () => {
    return (
        <div className='caravan-group'>
            <div className="flex-1">
                {/* <img src={caravanGroup} alt="caravan-group-img" className='caravan-group-img' /> */}
            </div>
            <div className="flex-2">
                <h2>1000'den fazla karavan ile içinden istediğinizi kiralayın</h2>
                <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk
                    şeylerden biri de bütçenize ve kişisel tercihinize uygun
                    karavanı seçmek olacaktır. Gideceğiniz yere, izleyeceğiniz
                    rotaya ve kişi sayısına göre karavanınızı seçmek en ideali.
                    Karavan seçerken sadece satın alma değil..</p>
            </div>
        </div>
    )
}

export default CaravanGroup