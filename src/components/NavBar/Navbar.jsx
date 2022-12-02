import React, { useState, useEffect, useContext } from 'react'
import './navbar.css'
import logo from './../../assets/logo-main.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { AiOutlinePlus } from 'react-icons/ai'
import MenuIcon from '@mui/icons-material/Menu';

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
    const [ToggleMenu, setToggleMenu] = useState(false);
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
                    {!ToggleMenu && (
                        <h1 style={{ color: '#FFF' }}><MenuIcon style={{ fontSize: '27px' }} onClick={() => setToggleMenu(true)} /></h1>
                    )}
                    {ToggleMenu && (
                        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                            <MenuIcon style={{ color: '#FFF' }} className="overlay__close" onClick={() => setToggleMenu(false)} />
                            <ul className="app__navbar-smallscreen_links">
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
                                {loggedIn ?
                                    <div>
                                        <li>
                                            <NavLink to="/profile"><button className='btn btn-white' style={{ fontSize: '14px' }}>Profile</button></NavLink>
                                        </li>
                                        <li>
                                            <button className='btn btn-transparent' onClick={handleLogout} style={{ fontSize: '14px' }}>Logout</button>
                                        </li>
                                    </div>
                                    :
                                    <div>
                                        <li>
                                            <NavLink to="/login"><button className="btn btn-transparent" style={{ fontSize: '14px' }}>Giriş</button></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/kiraya-verin"><button className="btn btn-white" style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}><AiOutlinePlus style={{ marginRight: 5, fontSize: '1.2rem' }} /> Karavan Ekle</button></NavLink>
                                        </li>
                                    </div>
                                }
                                <li>

                                </li>
                            </ul>

                        </div>
                    )}
                </div>
                {loggedIn ?
                    <div className="after-logged">
                        <NavLink to="/profile"><button className='btn btn-white' style={{ fontSize: '14px' }}>Profile</button></NavLink>
                        <button className='btn btn-transparent' onClick={handleLogout} style={{ fontSize: '14px' }}>Logout</button>

                    </div>

                    :

                    <div className="before-logged">
                        <NavLink to="/login"><button className="btn btn-transparent" style={{ fontSize: '14px' }}>Giriş</button></NavLink>
                        <NavLink to="/kiraya-verin"><button className="btn btn-white" style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}><AiOutlinePlus style={{ marginRight: 5, fontSize: '1.2rem' }} /> Karavan Ekle</button></NavLink>
                    </div>
                }

            </div>
        </nav>

    )
}

export default Navbar
