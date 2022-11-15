import React, {useEffect} from 'react'
import './howtorent.css'
import NavBarWhite from '../../components/NavBar/NavbarWhite'
import Header from '../../components/GiveRentComponents/Header/Header'
import CaravanGroup from '../../components/GiveRentComponents/CaravanGroup/CaravanGroup'
import InformationSection from '../../components/HowToRentComponents/InformationSection/InformationSection'
import Advantages from '../../components/HowToRentComponents/Advantages/Advantages'
import Features from '../../components/HowToRentComponents/Features/Features'

const HowToRent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div style={{backgroundColor: '#FFF'}}>
      <NavBarWhite />
      <Header />
      <InformationSection/>
      <Advantages/>
      <Features/>
    </div>
  )
}

export default HowToRent
