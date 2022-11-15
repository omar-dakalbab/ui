import React from 'react'
import './blogdetailswrapper.css'
import logo from './logo.png'
import BlogSuggestions from '../BlogSuggestions/BlogSuggestions';
import LoginFirstComp from '../LoginFirstComp/LoginFirstComp';
import CommentComp from '../CommentComp/CommentComp';
import CommentsComp from '../CommentsComp/CommentsComp';


const BlogDetailsWrapper = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="blog-details-wrapper" >
            <h1>{props.header}</h1>
            <div style={{ padding: '0 15%', textAlign: 'center' }}>
                <span>{props.body}</span>
            </div>
            <br />
            <div className="logo-caravinn">
                <img src={logo} alt="" />
                <div className="logo-title">
                    <h3>Caravınn</h3>
                    <p>Caravınn Ailesi</p>
                </div>
            </div>

            {user ?
                (

                    <CommentComp />
                )
                :
                (<LoginFirstComp />)
            }
            <CommentsComp />
            <BlogSuggestions />
        </div>
    )
}

export default BlogDetailsWrapper