import React from 'react'
import './advantages.css'
import pic from './assets/pic.svg'

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="flex">
                <div className="flex-1">
                    <img src={pic} width="100%" alt="" />
                </div>
                <div className="flex-2">
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk şeylerden biri
                        de bütçenize ve kişisel tercihinize uygun karavanı seçmek olacaktır.</p>
                    <br />
                    <br />
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk şeylerden biri
                        de bütçenize ve kişisel tercihinize uygun karavanı seçmek olacaktır.</p>

                </div>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <h1>Caravınn’ın bana <br /> sağladıği avantajlar <br /> nelerdir?</h1>
                </div>
                <div className="flex-2">
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk şeylerden biri
                        de bütçenize ve kişisel tercihinize uygun karavanı seçmek olacaktır.</p>
                    <br />
                    <br />
                    <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk şeylerden biri
                        de bütçenize ve kişisel tercihinize uygun karavanı seçmek olacaktır.</p>
                </div>
            </div>
        </div>
    )
}

export default Advantages
