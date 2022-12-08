import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'
import logo from './logo-main.png'
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';
const Layout = () => {
    return (
        <div className="admin-left-menu" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to={'/admin'} style={{ textAlign: 'center', marginBottom: '25px' }}><img src={logo} alt="" /></Link>
            <ul>
                <li>
                    <Link className='link' to={'/admin/caravans'} style={{ display: 'flex', alignItems: 'center' }}>
                        <RvHookupOutlinedIcon style={{ marginRight: '10px' }} /> Karavan
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/rent-request'} style={{ display: 'flex', alignItems: 'center' }}>
                        <NoCrashOutlinedIcon style={{ marginRight: '10px' }} /> Karavan Kiralama Istek
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/blogs'} style={{ display: 'flex', alignItems: 'center' }}>
                        <BookOutlinedIcon style={{ marginRight: '10px' }} /> Blog
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/users'} style={{ display: 'flex', alignItems: 'center' }}>
                        <PeopleAltOutlinedIcon style={{ marginRight: '10px' }} /> Kullanıcılar
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/comments'} style={{ display: 'flex', alignItems: 'center' }}>
                        <CommentOutlinedIcon style={{ marginRight: '10px' }} /> Yorumlar
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/comments-approve'} style={{ display: 'flex', alignItems: 'center' }}>
                        <MarkChatReadOutlinedIcon style={{ marginRight: '10px' }} />  Yorum onaylamak
                    </Link>
                </li>
                <li>
                    <Link className='link' to={'/admin/rented-caravan'} style={{ display: 'flex', alignItems: 'center' }}>
                        <DepartureBoardOutlinedIcon style={{ marginRight: '10px' }} /> Kiralanan Karavanlar
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout
