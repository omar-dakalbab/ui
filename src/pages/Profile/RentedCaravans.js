import React from 'react'
import Header from '../../components/Profile/Header/Header'
import RentedCaravanComp from '../../components/Profile/RentedCaravans/RentedCaravanComp'
const RentedCaravans = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            
            <Header text="Kiraladıklarım" />
            <RentedCaravanComp />
        </div>
    )
}

export default RentedCaravans
