import React, { useEffect } from 'react'
import Header from '../../components/CaravansComponents/Header/Header'
import Navbar from '../../components/NavBar/NavbarWhite'
import Buttons from '../../components/CaravansComponents/Buttons/Buttons'
import CaravansCard from '../../components/CaravansComponents/CaravansCard/CaravansCard'
import { useParams } from 'react-router-dom'
const Caravans = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let location = useParams();
  return (
    <div>
      <Navbar />
      <Header />
      <div className="wrapper-white" style={{ bottom: 120, padding: '75px 10%' }}>
        <Buttons />
        <CaravansCard limit="24" request={location.location} />
      </div>
    </div>
  )
}

export default Caravans