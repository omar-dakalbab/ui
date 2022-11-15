import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './update.css'
import Axios from 'axios'
import { useEffect } from 'react';

const BlogUpdate = () => {
    const { id } = useParams()
    const getCaravan = () => {
        Axios.get(`https://caravinn-test.herokuapp.com/api/blog/post/${id}`).then((resp) => {
            setState({ ...resp.data[0] })
        })
    }
    useEffect(() => {
        getCaravan()
    }, [id])
    const nav = useNavigate()
    const initialState = {
        blog_title: "",
        blog_header: "",
        blog_body: "",
        date_created: "",
    }
    const [state, setState] = useState(initialState);
    const { blog_title, blog_header, blog_body, date_created } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = () => {
        Axios
            .put(`https://caravinn-test.herokuapp.com/api/blog/update/${id}`, {
                blog_title,
                blog_header,
                blog_body,
                date_created,
            })
            .then((response) => {
                console.log(response)
                setState({ blog_title: "", blog_header: "", blog_body: "", date_created: "" })
            })
        nav('/admin/blogs')
    }
    return (
        <div className='update-panels' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div    >
                <label htmlFor="title">Blog Title</label>
                <input
                    type="text"
                    id='blog_title'
                    name='blog_title'
                    placeholder='blog_title'
                    value={blog_title || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="road">Blog Header</label>
                <input
                    type="text"
                    id='blog_header'
                    name='blog_header'
                    placeholder='blog_header'
                    value={blog_header || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="fuel">Blog Body</label>
                <textarea
                    type="text"
                    id='blog_body'
                    name='blog_body'
                    placeholder='blog_body'
                    value={blog_body || ""}
                    onChange={handleChange}
                />
            </div>
            {/* <div>
                <label htmlFor="type">Date Created</label>
                <input
                    type="date"
                    id='date_created'
                    name='date_created'
                    placeholder='date_created'
                    value={date_created || ""}
                    onChange={handleChange}
                />
            </div> */}

            <input type="submit" value="Güncelle" onClick={handleSubmit} />
        </div>
    )
}

export default BlogUpdate
