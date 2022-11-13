import React, {useEffect} from 'react'
import Navbar from '../../components/NavBar/Navbar'
import LoginComponent from '../../components/LoginSignupComponents/LoginComponent/LoginComponent'
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className='login-main'>
       <Navbar /> 
       <LoginComponent /> 
    </div>
  )
}

export default Login