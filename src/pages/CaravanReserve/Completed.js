import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import level3 from '../../components/CaravanReserveComp/level3.svg'
import success from '../../components/CaravanReserveComp/complete.png'
import Navbar from '../../components/NavBar/NavbarWhite'
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
                <button>
                    <NavLink style={{color: '#FFF'}} to='/kiralik-karavanlar/all'>
                        Karavanlarıma Git
                    </NavLink>
                </button>
            </div>
        </>
    )
}

export default Completed
