import React, {useEffect} from 'react'
import Navbar from '../../components/NavBar/NavbarWhite'
import EkUrunlerComp from '../../components/CaravanReserveComp/EkUrunlerComp'

const EkUrunler = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
          
            <EkUrunlerComp />
        </div>
    )
}

export default EkUrunler
