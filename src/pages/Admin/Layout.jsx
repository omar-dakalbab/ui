import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'
import logo from './logo-main.png'
const Layout = () => {
    return (
        <div className="admin-left-menu" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to={'/admin'}><img src={logo} alt="" style={{ marginBottom: 35 }} /></Link>
            <ul>
                <li>
                    <Link className='link' to={'/admin/caravans'}>
                        Caravans
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/rent-request'}>
                        Karavan Kiralama Istek
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/blogs'}>
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/users'}>
                        Users
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/comments'}>
                        Comments
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/comments-approve'}>
                        Comments Approve
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/rented-caravan'}>
                        Rented Caravan
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout
