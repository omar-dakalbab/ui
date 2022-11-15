import React from 'react'
import icon_1 from './icon-1.png'
import icon_2 from './icon-2.png'
import icon_3 from './icon-3.png'
import icon_4 from './icon-4.png'
import './about-wrapper.css'
const AboutWrapper = () => {
    return (
        <div className='about-wrapper-main'>
            <div className="circle-cards">
                <div className="circle-card">
                    <img src={icon_1} width="80px" alt="" />
                    <h4>1450+</h4>
                    <span>İş Ortağı</span>
                </div>
                <div className="circle-card">
                    <img src={icon_2} width="70px" alt="" />
                    <h4>15.580+</h4>
                    <span>Kayıtlı Kullanıcı</span>
                </div>
                <div className="circle-card">
                    <img src={icon_3} width="50px" alt="" />
                    <h4>30+</h4>
                    <span>Geçerli Ülkeler</span>
                </div>
                <div className="circle-card">
                    <img src={icon_4} width="88px" alt="" />
                    <h4>100+</h4>
                    <span>Ödeme Metodları</span>
                </div>
            </div>
            <div className="about-wrapper-content">

                <h1>Misyonumuz</h1>
                <p>Karavanla seyahat etme kararını alır almaz yapmanız gerek ilk şeylerden biri de bütçenize ve kişisel tercihinize uygun karavanı seçmek olacaktır.
                    Gideceğiniz yere, izleyeceğiniz rotaya ve kişi sayısına göre karavanınızı seçmek en ideali. Karavan seçerken sadece satın alma değil,
                    kiralama opsiyonlarından da yararlanabilirsiniz.</p>
            </div>
        </div>
    )
}

export default AboutWrapper
