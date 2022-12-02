import React, { useEffect } from 'react'
import CaravanReserveComp from '../../components/CaravanReserveComp/CaravanReserveComp'
import Footer from '../../components/Footer/Footer'

const CaravanReserve = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <CaravanReserveComp />
            <Footer/>
        </div>
    )
}

export default CaravanReserve
