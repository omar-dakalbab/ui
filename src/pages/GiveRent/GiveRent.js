import React from 'react'
import NavBarWhite from '../../components/NavBar/NavbarWhite'
import Header from '../../components/HowToRentComponents/Header/Header'
import InformationSection from '../../components/HowToRentComponents/InformationSection/InformationSection'
import Advantages from '../../components/HowToRentComponents/Advantages/Advantages'
import BlueSection from '../../components/HowToRentComponents/BlueSection/BlueSection'
import Features from '../../components/HowToRentComponents/Features/Features'

const GiveRent = () => {
  return (
    <div style={{ backgroundColor: '#FFF' }}>
      <NavBarWhite />
      <Header />
      <InformationSection />
      <Advantages />
      <BlueSection />
      <Features />
    </div>
  )
}

export default GiveRent
