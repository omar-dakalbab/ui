import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './blogdetailsheader.css'
const BlogDetails = (props) => {
    const [fileName, setFileName] = useState('')
    useEffect(() => {
        setFileName(process.env.PUBLIC_URL + `${props.blog_image}`)
        console.log(fileName)
    })
    return (
        <div className="bl-bg">
            <div className='blog-details-header-main'>
                <h3>
                    <MdKeyboardArrowLeft
                        style={{ fontSize: '2rem' }}
                    />
                    <NavLink to='/blog' style={{ color: '#FFF' }}>Tüm yazılara geri dön</NavLink>
                </h3>
                <h1>{props.blog_title}</h1>
                <span>{props.blog_time}</span>
                <div className="blog-details-header-div">
                    <img className='blog-details-header-img' src={process.env.PUBLIC_URL + `/img/${fileName}`} alt="" />
                    {/* <img className='blog-details-header-img' src={bg} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
