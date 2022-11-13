import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { FaCaravan } from 'react-icons/fa'
import { FaRegHandshake } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const LeftMenu = () => {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/profile" style={{ color: '#000' }} className={({ isActive }) => isActive && 'active'}>
                    <span>
                        <AiOutlineHome style={{ color: '#1E98C7' }} className='panel-icons' />Hesabım
                    </span>
                </NavLink></li>

                <li><NavLink to="/profile/favorite" style={({ isActive }) => ({
                    color: isActive ? '#000' : '#9FA5B0'
                })}>
                    <span>
                        <FiHeart className='panel-icons' />Favorilerim
                    </span>
                </NavLink>

                </li>

                <li>
                    <NavLink to="/profile/adverts" style={({ isActive }) => ({
                        color: isActive ? '#000' : '#9FA5B0'
                    })}>
                        <span>
                            < FaCaravan className='panel-icons' /> İlanlarım
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/rented-caravans" style={({ isActive }) => ({
                        color: isActive ? '#000' : '#9FA5B0'
                    })}>
                        <span>
                            <FaRegHandshake className='panel-icons' />Kiraladıklarım
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export default LeftMenu
