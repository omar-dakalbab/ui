import React, {useEffect} from 'react'
import Banner from '../../components/ContactUsComponents/Banner/Banner'
import Header from '../../components/ContactUsComponents/Header/Header'
import NavBar from '../../components/NavBar/NavbarWhite'
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div style={{backgroundColor: '#FFF'}}>
        <NavBar/>
        <Header/>
        <Banner/>
    </div>
  )
}

export default ContactUs
