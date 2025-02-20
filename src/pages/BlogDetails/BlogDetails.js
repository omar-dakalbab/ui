import React, { useState, useEffect } from 'react'
import BlogDetailsHeader from '../../components/BlogComponents/BlogDetails/BlogDetailsHeader/BlogDetailsHeader'
import BlogDetailsWrapper from '../../components/BlogComponents/BlogDetails/BlogDetailsWrapper/BlogDetailsWrapper'
import NavBar from '../../components/NavBar/Navbar'
import { useParams } from 'react-router-dom';
import Axios from 'axios'

const BlogDetails = () => {
  const axiosIntance = Axios.create({
    baseURL: process.env.REACT_APP_URL,
});
  let { blogId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
    axiosIntance.get(
      `/blog/post/${blogId}`
    ).then((data) => {
      setPost({
        blog_image: data.data[0].blog_image,
        blog_title: data.data[0].blog_title,
        date_created: data.data[0].date_created,
        blog_header: data.data[0].blog_header,
        blog_body: data.data[0].blog_body,
      });
    });
  }, []);
  return (
    <div className="blog-details">
      <div className="bl-bg">
        <NavBar />
        <BlogDetailsHeader blog_image={post.blog_image} blog_title={post.blog_title} blog_time={post.date_created} />
      </div>
      <div className="wrapper-white">
        <BlogDetailsWrapper header={post.blog_header} body={post.blog_body} blogID={blogId} />
      </div>
    </div>
  )
}

export default BlogDetails