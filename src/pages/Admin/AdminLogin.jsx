import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/NavBar/NavbarWhite'

const AdminLogin = () => {
    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh'
            }}
            >
                <h1>Admin Login</h1>
                <br />
                <input type="text" placeholder='username' />
                <br />
                <input type="text" placeholder='password' />
                <br />
                <input type="submit" value="Submit" />

            </div>
            <Footer />
        </>
    )
}

export default AdminLogin
