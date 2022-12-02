import React, {useEffect} from 'react'
import CreditCardComp from '../../components/CaravanReserveComp/CreditCardComp'
import Footer from '../../components/Footer/Footer'
const CreditCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{backgroundColor: '#FBFBFB'}}>
            <CreditCardComp />
            <Footer/>
        </div>
    )
}

export default CreditCard
