import React from 'react'
import './header.css'
const Header = (props) => {
    return (
        <div className="profile-header">
                <h1>{props.text}</h1>
        </div>
    )
}

export default Header