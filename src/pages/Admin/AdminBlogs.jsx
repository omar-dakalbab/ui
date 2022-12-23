import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import axios from 'axios'
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
      await axios.post("http://104.247.164.103/api/blog/add", formData)
    }
    catch (err) {
      console.log(err)
    }
    getBlog()
  }

  const [blog_list, SetBlog_list] = useState([]);

  const getBlog = () => {
    axios.get("http://104.247.164.103/api/blog/post").then((response) => {
      SetBlog_list(response.data)
    }, [])
  }

  useEffect(() => {
    getBlog()
  }, [])
  const deleteItem = (id) => {
    axios.delete(`http://104.247.164.103/api/blog/post-remove/${id}`).then((response) => {
      console.log(response)
      getBlog()
    })
  }

  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("")
  return (
    <div className='admin-panel'>
      <Layout />
      <div className="admin-page-content">
        <div className="insert-blog">
          <span className='input-data'>
            <label>Blog Fotoğrafı</label>
            <input type="file" name='blog_image' onChange={handleFileChange} />
            <img style={{ width: '200px' }} src={image.preview} alt="" />
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
          <div style={{ display: 'flex' }}>
            <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
            <select id='select-filter' onChange={(e) => setFilterData(e.target.value)}>
              <option value="id">Blog ID</option>
              <option value="blog_title">Blog Başlığı</option>
              <option value="blog_header">Blog Başlığı 2</option>
              <option value="blog_body">Blog Body</option>
            </select>
          </div>
          <table>
            <tr>
              <th>Blog ID</th>
              <th>Blog Fotoğrafı</th>
              <th>Blog Başlığı</th>
              <th>Blog Başlık 2</th>
              <th>Blog Body</th>
              <th>Date Created</th>
            </tr>
            {blog_list.filter((val) => {
              if (filterData === 'blog_title') {
                return search.toLowerCase() === '' ? val : val.blog_title.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'blog_header') {
                return search.toLowerCase() === '' ? val : val.blog_header.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'blog_body') {
                return search.toLowerCase() === '' ? val : val.blog_body.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'id') {
                return search === '' ? val : val.id.toString()
                  .includes(search)
              }
              else {
                return search === '' ? val : val
              }
            }).map((val, key) => {
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
