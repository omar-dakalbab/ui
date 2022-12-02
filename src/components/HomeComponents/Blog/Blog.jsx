import React, { useEffect } from 'react'
import './blog.css'
import BlogCard from '../BlogCard/BlogCard'
import pic1 from './assets/blog-pic1.png'
import pic2 from './assets/blog-pic2.png'
import pic3 from './assets/blog-pic3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div
            data-aos-duration="2500"
            data-aos-delay="50"
            data-aos="fade-down"
            className='blog'
        >
            <h1>Caravınn</h1>
            <h1>Blog</h1>

            <div className="blog-cards">
                <BlogCard img={pic1} text="Günlük Kiralanabilen Karavan Araçları ile İstanbul İçi Tatil Noktaları Önerileri" />
                <BlogCard img={pic2} text="Günlük Kiralanabilen Karavan Araçları ile İstanbul İçi Tatil Noktaları Önerileri" />
                <BlogCard img={pic3} text="Günlük Kiralanabilen Karavan Araçları ile İstanbul İçi Tatil Noktaları Önerileri" />
            </div>
        </div>
    )
}

export default Blog
