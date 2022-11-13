import React from 'react'
import Header from '../../components/Profile/Header/Header'
import RentedHistory from '../../components/Profile/RentedCaravans/RentedHistory'
const RentedCaravans = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
          
            <Header text="Kiraladıklarım | Geçmiş" />
            <RentedHistory />
        </div>
    )
}

export default RentedCaravans
