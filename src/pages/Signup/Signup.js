import React from 'react'
import SignupComponent from '../../components/LoginSignupComponents/SignupComponent/signupcomponent'
import Navbar from '../../components/NavBar/Navbar'
const Signup = () => {
    return (
        <div className='signup-main'>
            <Navbar />
            <SignupComponent />
        </div>
    )
}

export default Signup