import React, {useEffect} from 'react'
import EkUrunlerComp from '../../components/CaravanReserveComp/EkUrunlerComp'
import Footer from '../../components/Footer/Footer'
const EkUrunler = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
          
            <EkUrunlerComp />
            <Footer/>
        </div>
    )
}

export default EkUrunler
