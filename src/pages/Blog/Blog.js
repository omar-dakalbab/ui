import React, { useEffect } from 'react'
import BlogMainPage from '../../components/BlogComponents/BlogMainPage/BlogMainPage'
import NavBar from '../../components/NavBar/NavbarWhite'
import Footer from '../../components/Footer/Footer'
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='blog-main-page'>
            <NavBar />
            <BlogMainPage />
        </div>
    )
}

export default Blog