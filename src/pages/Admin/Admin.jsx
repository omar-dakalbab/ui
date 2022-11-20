import React from 'react'
import Layout from './Layout'
import './admin-style.css'
const Admin = () => {
    return (
        <div className='admin-panel' style={{ backgroundColor: '#E6F1F6' }}>
            <Layout text="Main" />
            <div className="admin-page-content">
                <div className="admin-stats-cards">
                    <div className="stats-card">
                        <h4>Users</h4>
                        <span>259</span>
                    </div>
                    <div className="stats-card">
                        <h4>Comments</h4>
                        <span>2000</span>
                    </div>
                    <div className="stats-card">
                        <h4>Blogs</h4>
                        <span>25</span>
                    </div>
                    <div className="stats-card">
                        <h4>Likes</h4>
                        <span>5000</span>
                    </div>
                    <div className="stats-card">
                        <h4>Caravans</h4>
                        <span>60</span>
                    </div>
                    <div className="stats-card">
                        <h4>Rented Caravans</h4>
                        <span>12</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin