import React, { useEffect, useState } from 'react'
import './blogcard.css'
import Axios from 'axios'
import bg from './assets/bg1.png'
import { useNavigate } from 'react-router-dom'

const BlogCard = (props) => {

    const [blogList, SetblogList] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        Axios.get("https://caravinn-test.herokuapp.com/api/blog/post").then((response) => {
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
                        <div className="blog-main-page-card"
                            onClick={() => {
                                navigate(`/blog/${val.id}`);
                            }}
                            key={key}
                            style={{ width: props.width, cursor: 'pointer' }}
                        >
                            <img src={bg} alt="" />
                            <p>{val.blog_title}</p>
                            {/* <h3>{val.blog_header}</h3> */}
                        </div>
                    );
                })
            )}
        </div>
    )
}

export default BlogCard

