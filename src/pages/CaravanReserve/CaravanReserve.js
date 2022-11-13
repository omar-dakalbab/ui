import React, { useEffect } from 'react'
import CaravanReserveComp from '../../components/CaravanReserveComp/CaravanReserveComp'


const CaravanReserve = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <CaravanReserveComp />
        </div>
    )
}

export default CaravanReserve
