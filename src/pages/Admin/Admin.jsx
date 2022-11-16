import React from 'react'
import Layout from './Layout'
import './admin-style.css'
const Admin = () => {
    return (
        <div className='admin-panel'>
            <Layout text="Main" />
            <div className="admin-page-content">
                <div className="admin-stats-cards">
                    <div className="stats-card">
                        <h4>Earnings</h4>
                        <span>350$</span>
                    </div>
                    <div className="stats-card">
                        <h4>Earnings</h4>
                        <span>350$</span>
                    </div>
                    <div className="stats-card">
                        <h4>Earnings</h4>
                        <span>350$</span>
                    </div>
                    <div className="stats-card">
                        <h4>Earnings</h4>
                        <span>350$</span>
                    </div>
                    <div className="stats-card">
                        <h4>Earnings</h4>
                        <span>350$</span>
                    </div>
                    <div className="stats-card">
                        <h4>Earnings</h4>
                        <span>350$</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin