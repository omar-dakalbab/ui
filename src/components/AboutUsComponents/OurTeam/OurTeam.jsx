import React from 'react'
import './our-team.css'
import profile from './profile.png'
const OurTeam = () => {
    return (
        <div className='our-team'>
            <h1>Ekibimizle Tanış</h1>
            <div className="our-team-cards">
                <div className="our-team-card">
                    <img src={profile} alt="" />
                    <h2>Emre Bulat</h2>
                    <span>CEO</span>
                </div>
                <div className="our-team-card">
                    <img src={profile} alt="" />
                    <h2>Emre Bulat</h2>
                    <span>CEO</span>
                </div>
                <div className="our-team-card">
                    <img src={profile} alt="" />
                    <h2>Emre Bulat</h2>
                    <span>CEO</span>
                </div>
                <div className="our-team-card">
                    <img src={profile} alt="" />
                    <h2>Emre Bulat</h2>
                    <span>CEO</span>
                </div>
            </div>

        </div>
    )
}

export default OurTeam
