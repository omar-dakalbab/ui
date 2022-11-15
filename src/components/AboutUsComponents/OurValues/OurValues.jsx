import React from 'react'
import icon1 from './i1.png'
import icon2 from './i2.png'
import icon3 from './i3.png'
import './our-values.css'
const OurValues = () => {
    return (
        <div className='our-values'>
            <h1>Değerlerimiz</h1>
            <p>Biz yenilikçilerden, hayalperestlerden ve kararlı kimselerden oluşan bir ekibiz. Dünyayı daha iyi bir şey yaratmak
                için bir fırsat olarak görüyoruz ve kendimizi daha kapsayıcı bir finansal gelecek inşa etmeye adamış bulunmaktayız.</p>
            <div className="value-cards">
                <div className="value-card">
                    <img src={icon1} alt="" />
                    <h1>Sade</h1>
                    <p>Her zaman işleri sizin için zahmetsiz bir hâle getirmeye çalışıyoruz.</p>
                </div>
                <div className="value-card">
                    <img src={icon2} alt="" />
                    <h1>Hızlı</h1>
                    <p>Her zaman işleri sizin için zahmetsiz bir hâle getirmeye çalışıyoruz.</p>
                </div>
                <div className="value-card">
                    <img src={icon3} alt="" />
                    <h1>Güvenli</h1>
                    <p>Her zaman işleri sizin için zahmetsiz bir hâle getirmeye çalışıyoruz.</p>
                </div>
            </div>
        </div>
    )
}

export default OurValues
