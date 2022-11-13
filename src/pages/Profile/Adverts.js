import React from 'react'
import AdvertsPanel from '../../components/Profile/Adverts/AdvertsPanel'
import Header from '../../components/Profile/Header/Header'

const Adverts = () => {

  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '100%'}}>
      <Header text="İlanlarım" />
      <AdvertsPanel />
    </div>
  )
}

export default Adverts
