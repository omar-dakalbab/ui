import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

const AdminBlogs = () => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [inputs, setInputs] = useState({
    blog_title: "",
    blog_header: "",
    blog_body: "",
  })

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  const handleInsert = async e => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    formData.append('blog_title', inputs.blog_title)
    formData.append('blog_header', inputs.blog_header)
    formData.append('blog_body', inputs.blog_body)
    try {
      await Axios.post("https://caravinn-test.herokuapp.com/api/blog/add", formData)
    }
    catch (err) {
      console.log(err)
    }
    getBlog()
  }

  const [blog_list, SetBlog_list] = useState([]);

  const getBlog = () => {
    Axios.get("https://caravinn-test.herokuapp.com/api/blog/post").then((response) => {
      SetBlog_list(response.data)
    }, [])
  }

  useEffect(() => {
    getBlog()
  }, [])
  const deleteItem = (id) => {
    Axios.delete(`https://caravinn-test.herokuapp.com/api/blog/post-remove/${id}`).then((response) => {
      console.log(response)
      getBlog()
    })
  }
  return (
    <div className='admin-panel'>
      <Layout />
      <div className="admin-page-content">
        <div className="insert-blog">
          <span className='input-data'>
            <label>Blog Fotoğrafı</label>
            <input type="file" name='blog_image' onChange={handleFileChange} />
            <img style={{width: '200px'}} src={image.preview} alt="" />
          </span>
          <span className='input-data'>
            <label>Başlık</label>
            <input type="text" name='blog_title' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Blog Başlık</label>
            <input type="text" name='blog_header' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Blog</label>
            <textarea type="text" name='blog_body' onChange={handleChange} />
          </span>

          <button id='insert' onClick={handleInsert}>Blog Oluştur</button>
        </div>
        <br />

        <div className="table">

          <table>
            <tr>
              <th>Blog ID</th>
              <th>Blog Img</th>
              <th>Blog Title</th>
              <th>Blog Header</th>
              <th>Blog Body</th>
              <th>Date Created</th>
            </tr>
            {blog_list.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.blog_image}</td>
                  <td>{val.blog_title}</td>
                  <td>{val.blog_header}</td>
                  <td id='blog_body'>{val.blog_body}</td>
                  <td>{moment(val.date_created).fromNow()}</td>

                  <Link to={`update/${val.id}`}><button style={{ margin: 10, padding: 15 }}>Düznle</button></Link>
                  <button onClick={() => deleteItem(val.id)} style={{ margin: 10, padding: 15 }}>Sil</button>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminBlogs
