import React from 'react'
import './features.css'
import percentage from './assets/percentage.svg'
import earth from './assets/earth.svg'
import caravan from './assets/caravan.svg'
import notification from './assets/notification.svg'


const Features = () => {
    return (
        <div className="features-cards">
            <div className="horz-cards">
                <div className="fea-card card-1">
                    <div className="text">
                        <h3>Yükledikçe Kazanın</h3>
                        <p>Yüklediğin Anda her yükleyişte
                            %1 Ücret Kazanın</p>
                    </div>
                    <img className='perc-img'  src={percentage} alt="perc-img" />
                </div>
                <div className="fea-card card-2">
                    <div className="text">
                        <h3>Hem Siz, Hem Onlar</h3>
                        <p>Kullanmadığınız günleri özel
                            olarak sistem içinden ayarlayın.</p>
                    </div>
                    <img className='earth-img' src={earth} alt="earth-img" />
                </div>
            </div>
            <div className="vert-cards">
                <div className="fea-card card-3">
                    <div className="text"><h3>Kiralamaya Başla %1 Kazan</h3>
                        <p>Her kiralamanda Anda her yükleyişte %1 Ücret Kazanın</p></div>
                    <img src={caravan} className="caravan-img" alt="caravan-img" />
                </div>
                <div className="fea-card card-4">
                    <h2>Anlık <br /> Bildirimler</h2>
                    <img src={notification} className="notif-img" alt="notif-img" />
                    <p>Tüm bildirimleri aktif hale getirin, ilk siz haberdar
                        olun.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
