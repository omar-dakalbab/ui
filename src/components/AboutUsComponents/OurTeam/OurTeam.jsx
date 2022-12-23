import React from 'react'
import './our-team.css'
import emre from './emre.png'
import orhan from './orhan.png'
import erkan from './erkan.png'
import ragip from './ragip.png'
import blank from './blank.png'
const OurTeam = () => {
    return (
        <div className='our-team'>
            <h1>Ekibimizle Tanış</h1>
            <div className="our-team-cards">
                <div className="our-team-card">
                    <img src={emre} alt="" />
                    <h2>Emre Bulat</h2>
                    <span>Founder</span>
                </div>
                <div className="our-team-card">
                    <img src={orhan} alt="" />
                    <h2>Orhan Erden</h2>
                    <span>Marketing Manager</span>
                </div>
                <div className="our-team-card">
                    <img src={erkan} alt="" />
                    <h2>Erkan Çiftçi</h2>
                    <span>Head of production</span>
                </div>
                <div className="our-team-card">
                    <img src={ragip} alt="" />
                    <h2>Ragıp Çavdar</h2>
                    <span style={{fontSize: '14px'}}>Business development specialist</span>
                </div>
                <div className="our-team-card">
                    <img src={blank} alt="" />
                    <h2>Mustafa Mutlu</h2>
                    <span>Chief technology officer</span>
                </div>
                <div className="our-team-card">
                    <img src={blank} alt="" />
                    <h2>Gökhan kahraman</h2>
                    <span>Head of design</span>
                </div>
            </div>

        </div>
    )
}

export default OurTeam
