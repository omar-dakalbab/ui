import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import level3 from '../../components/CaravanReserveComp/level3.svg'
import success from '../../components/CaravanReserveComp/complete.png'
import Footer from '../../components/Footer/Footer'
const Completed = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className='ek-urunler-comp'>
                <img src={level3} alt="" />
            </div>
            <div className="success-message">
                <img src={success} alt="" />
                <h1>TEBRİKLER!</h1>
                <p>Tebrikler Maceraya Vınn'lamaya Hazırsınız...</p>
                <NavLink style={{ color: '#FFF' }} to='/kiralik-karavanlar'>
                    <button style={{width: '100%'}}>

                        Karavanlarıma Git

                    </button>
                </NavLink>
            </div>
            <Footer />
        </>
    )
}

export default Completed
