import React, { useEffect, useState } from 'react'
import './blogcard.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {

    const [blogList, SetblogList] = useState([]);

    useEffect(() => {
        Axios.get("http://104.247.164.103/api/blog/post").then((response) => {
            SetblogList(response.data)
        });
    }, []);
    return (
        <div className='blog-map' >
            {blogList === [] ? (
                <h1>Loading...</h1>
            ) : (
                blogList.map((val, key) => {
                    return (
                        <div style={{ cursor: 'pointer' }}>
                            <Link to={`/blog/${val.id}`}>
                                <div key={key} className="blog-main-page-card">
                                    <img src={process.env.PUBLIC_URL + `/img/${val.blog_image}`} alt="" style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%'}} />
                                    <p style={{padding: '25px', color: '#000'}}>{val.blog_title}</p>
                                </div>
                            </Link>
                        </div>
                    );
                })
            )}
        </div>
    )
}

export default BlogCard

