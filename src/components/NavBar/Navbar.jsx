import React, { useState, useEffect, useContext } from 'react'
import './navbar.css'
import logo from './../../assets/logo-main.png'
import { NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { AiOutlinePlus } from 'react-icons/ai'

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        if (currentUser) {
            setLoggedIn(true)
            console.log(loggedIn)
        }
    })
    const nav = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        window.location.reload();
    }
    return (
        <nav className='navbar'>
            <div className="left-menu">
                <NavLink to="/" className={({ isActive }) => isActive && 'active'}><img src={logo} alt="logo" /></NavLink>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#FFF'
                        })} to="/nasil-kiralarim">Nasıl Kiralarım</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#FFF'
                        })} to="/nasil-kiraya-veririm">Nasıl Kiraya Veririm</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#FFF'
                        })} to="/kiralik-karavanlar/all">Kiralık Karavanlar</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#FFF'
                        })} to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#FFF'
                        })} to="/about-us">Hakkımızda</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#FFF'
                        })} to="/bize-ulasin">Bize Ulaşın</NavLink>
                    </li>



                </ul>
            </div>
            <div className="right-menu">
                <div className="hamburger-menu">
                    <h1>MENU</h1>
                </div>
                {loggedIn ?
                    <div className="after-logged">
                        <NavLink to="/profile"><button className='btn btn-white' style={{ fontSize: '14px' }}>Profile</button></NavLink>
                        <button className='btn btn-transparent' onClick={handleLogout} style={{ fontSize: '14px' }}>Logout</button>

                    </div>

                    :

                    <div className="before-logged">
                        <NavLink to="/login"><button className="btn btn-transparent" style={{ fontSize: '14px' }}>Giriş</button></NavLink>
                        <NavLink to="/kiraya-verin"><button className="btn btn-white" style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}><AiOutlinePlus style={{marginRight: 5, fontSize: '1.2rem'}}/> Karavan Ekle</button></NavLink>
                    </div>
                }

            </div>
        </nav>

    )
}

export default Navbar
