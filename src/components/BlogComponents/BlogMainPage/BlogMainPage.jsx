import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import BlogCardHeader from '../BlogCardHeader/BlogCardHeader'
import './blogmainpage.css'
import background from './assets/bg.png'
import Button from '../../Button/Button'


const BlogMainPage = () => {
    return (
        <div className='blog-main-page-content'>
            <img src={background} className="blog-main-bg" alt="" />
            <h1>
                <span style={{ color: '#2689B2' }}>Caravınn</span>
                <span style={{ color: '#196CA5' }}>Blog</span>
            </h1>
            <BlogCardHeader />
            <div className="blog-map">
                <BlogCard />
            </div>
            <br />
            <Button className="btn btn-blue" text="Daha Fazla Görüntüle" />
        </div>
    )
}

export default BlogMainPage