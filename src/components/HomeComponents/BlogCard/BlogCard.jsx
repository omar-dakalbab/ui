import React from 'react'
import './blogcard.css'

const BlogCard = ( props ) => {
  return (
        <div className="blog-card">
            <img src={props.img} alt="alt"/>
            <p>{props.text}</p>
        </div>
  )
}

export default BlogCard
