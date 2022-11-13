import React from 'react'
import BlogCard from '../../../HomeComponents/BlogCard/BlogCard'
import Button from '../../../Button/Button'
import pic1 from '../../../HomeComponents/Blog/assets/blog-pic1.png'
import pic2 from '../../../HomeComponents/Blog/assets/blog-pic2.png'
import pic3 from '../../../HomeComponents/Blog/assets/blog-pic3.png'
import {Link} from 'react-router-dom'
const BlogSuggestions = () => {
    return (
        <div className="blog-suggestions" style={{maxWidth: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{ color: '#196CA5', fontSize: '2.5rem',textAlign: 'center' }}>Diğer Yazılar</h1>

            <div className="blog-cards">
                <BlogCard img={pic1} text="Günlük Kiralanabilen Karavan Araçları ile İstanbul İçi Tatil Noktaları Önerileri" />
                <BlogCard img={pic2} text="Günlük Kiralanabilen Karavan Araçları ile İstanbul İçi Tatil Noktaları Önerileri" />
                <BlogCard img={pic3} text="Günlük Kiralanabilen Karavan Araçları ile İstanbul İçi Tatil Noktaları Önerileri" />
            </div>
            <br />
            <Link to={'/blog'}><Button text="Tümünü Gör" className="btn btn-transparent-blue" /></Link>

        </div>
    )
}

export default BlogSuggestions