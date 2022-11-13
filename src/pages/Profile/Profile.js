import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Profile/Header/Header'
import Panel from '../../components/Profile/Panel/Panel'

const Profile = (props) => {
  

  return (
    <div className='profile' style={{ backgroundColor: '#F5F5F5'}}>
  
      <Header text="Hesabım" />
      <Panel />
      <Footer/>
     
    </div>
  )
}

export default Profile