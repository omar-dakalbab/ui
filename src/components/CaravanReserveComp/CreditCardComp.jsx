import React, { useState, useEffect, useContext } from 'react'
import './credit-card.css'
import { MdArrowBackIosNew } from 'react-icons/md'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import level2 from './level2.svg'
import Axios from 'axios'
import { AuthContext } from '../../context/authContext'
const CreditCard = () => {
    const { id } = useParams();
    const { currentUser } = useContext(AuthContext)
    const updateRented = () => {
        Axios.put(`http://localhost:3001/api/caravan/rented/${id}/${currentUser.id}`, inputs).then((response) => {
            console.log(response.data)
        })
    }
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
                <NavLink to={`/caravan-rezerve/ek-urunler/${id}`} state={{ from: inputs }} ><div style={{ color: '#FFF' }}><button id='geri'> <MdArrowBackIosNew /> Geri</button></div></NavLink>
                <img src={level2} alt="" />
            </div>
            <div className="ek-urunler-content">
                <h1>Ödeme Bilgileri</h1>
                <div className="payment-inputs">
                    <div className="pay-inputs">
                        <input type="text" placeholder='Kart Numarası' />
                        <input type="text" placeholder='Kart Sahibi' />
                        <input type="text" placeholder='CVC' />
                        <input type="text" placeholder='Son Kullanma Tarihi' />
                    </div>
                    <div className="tutar">
                        <span id='toplam'>Toplam Tutar</span>
                        <span id='toplam-fiyat'>2,900,53 TL</span>
                    </div>
                    <NavLink style={{ color: '#FFF' }} to='/caravan-rezerve/complete'>
                        <button onClick={updateRented} id='odeme-btn'>
                            Ödemeyi Tamamla
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default CreditCard
