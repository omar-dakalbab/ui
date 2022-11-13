import React, {useEffect} from 'react'
import './home.css'
import CaravanSection from '../../components/HomeComponents/CaravanSection/CaravanSection'
import Header from '../../components/HomeComponents/Header/Header'
import Cards from '../../components/HomeComponents/Cards/Cards'
import PhoneSection from '../../components/HomeComponents/PhoneSection/PhoneSection'
import CaravanKiralaSection from '../../components/HomeComponents/CaravanKiralaSection/CaravanKiralaSection'
import GiveRent from '../../components/HomeComponents/GiveRentSection/GiveRent'
import Blog from '../../components/HomeComponents/Blog/Blog'
import Map from '../../components/HomeComponents/Map/Map'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Header />
      <div className="wrapper">
        <Cards />
      </div>
      <CaravanSection />
      <PhoneSection />
      <CaravanKiralaSection />
      <GiveRent />
      <Blog />
      <Map />
    </>


  )
}

export default Home