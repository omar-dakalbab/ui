import React, {useEffect} from 'react'
import CreditCardComp from '../../components/CaravanReserveComp/CreditCardComp'
const CreditCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{backgroundColor: '#FBFBFB'}}>
            <CreditCardComp />
        </div>
    )
}

export default CreditCard
