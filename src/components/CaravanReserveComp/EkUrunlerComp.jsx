import React, { useState, useEffect } from 'react'
import './ekurun.css'
import level from './level-pic.svg'
import EkUrunCard from './EkUrunCard'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import { NavLink, useParams } from 'react-router-dom'
const EkUrunlerComp = () => {
    const { id } = useParams();
    const location = useLocation()
    const { from } = location.state

    const [inputs, setInputs] = useState({
        description: "",
        startDate: "",
        endDate: "",
    })



    useEffect(() => {
        setInputs(from)
    })

    return (
        <>
            <div className='ek-urunler-comp'>
                <NavLink to={`/caravan-rezerve/${id}`} state={{ from: inputs }} style={{ color: '#FFF' }}> <button id='geri'> <MdArrowBackIosNew /> Geri</button></NavLink>
                <img src={level} alt="" />
            </div>
            <div className="ek-urunler-content">
                <h1>Ek Ürünler</h1>
                <div className="urun-cards">
                    <EkUrunCard />
                    <EkUrunCard />
                    <EkUrunCard />
                    <EkUrunCard />
                    <EkUrunCard />
                    <EkUrunCard />
                </div>

            </div>
            <div className="price-banner">
                <h1>Toplam Tutar <span>2,900,96</span>TL</h1>
                <NavLink style={{ color: '#FFF' }} to={`/caravan-rezerve/credit-card/${id}`} state={{ from: inputs }}><button>Sonraki Adım</button></NavLink>
            </div>
        </>
    )
}

export default EkUrunlerComp
