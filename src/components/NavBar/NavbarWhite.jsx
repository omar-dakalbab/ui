import React, { useEffect } from 'react'
import './navbar-white.css'
import logo from './../../assets/logo-main.png'
import { AiOutlinePlus } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'



const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        if (currentUser) {
            setLoggedIn(true)
        }
    })
    const nav = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        window.location.reload();
    }
    return (
        <nav className='navbar-white'>
            <div className="left-menu-white">
                <NavLink to="/" className={({ isActive }) => isActive && 'active'}><img src={logo} alt="logo" /></NavLink>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#0B91C5' : 'black'
                        })} to="/nasil-kiralarim">Nasıl Kiralarım</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#0B91C5' : 'black'
                        })} to="/nasil-kiraya-veririm">Nasıl Kiraya Veririm</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#0B91C5' : 'black'
                        })} to="/kiralik-karavanlar/all">Kiralık Karavanlar</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#0B91C5' : 'black'
                        })} to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#0B91C5' : 'black'
                        })} to="/about-us">Hakkımızda</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#0B91C5' : 'black'
                        })} to="/bize-ulasin">Bize Ulaşın</NavLink>
                    </li>



                </ul>
            </div>
            <div className="right-menu">
                {loggedIn ?
                    <div className="after-logged">
                        <NavLink to="/profile"><button className='btn btn-blue' style={{ fontSize: '14px' }}>Profile</button></NavLink>
                        <button className='btn navbar-white-btn-blue' onClick={handleLogout} style={{ fontSize: '14px' }}>Logout</button>

                    </div>

                    :

                    <div className="before-logged">
                        <NavLink to="/login"><button className="btn navbar-white-btn-blue" style={{ fontSize: '14px' }}>Giriş</button></NavLink>
                        <NavLink to="/kiraya-verin"><button className="btn btn-blue" style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}><AiOutlinePlus style={{marginRight: 5, fontSize: '1.2rem'}}/> Karavan Ekle</button></NavLink>
                    </div>
                }
            </div>
        </nav>

    )
}

export default Navbar
