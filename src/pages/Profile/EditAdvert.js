import React from 'react'
import AdvertEdit from '../../components/Profile/Adverts/AdvertEdit'
import Header from '../../components/Profile/Header/Header'


const EditAdvert = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Header text="İlanlarım"/>
            <AdvertEdit />
       
        </div>
    )
}

export default EditAdvert
