import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'
import moment from 'moment'
const AdminUsers = () => {
  const [user_list, SetUser_list] = useState([]);

  const getUsers = () => {
    Axios.get("http://104.247.164.103/api/user/").then((response) => {
      SetUser_list(response.data)
    }, [])
  }
  const axiosIntance = Axios.create({
    baseURL: process.env.REACT_APP_URL,
});
  useEffect(() => {
    getUsers()
  }, [])
  const deleteItem = (id) => {
    axiosIntance.delete(`/user/remove-user/${id}`).then((response) => {
      console.log(response)
      getUsers()
    })
  }
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("")
  return (
    <div className='admin-panel'>
      <Layout />
      <div className="admin-page-content">
        <div className="table">
          <div style={{ display: 'flex' }}>
            <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
            <select id='select-filter' onChange={(e) => setFilterData(e.target.value)}>
              <option value="id">ID</option>
              <option value="email">Email</option>
              <option value="name">Name</option>
              <option value="phone_number">Phone Number</option>
              <option value="location">Location</option>
            </select>
          </div>
          <table>

            <tr>
              <th>Kullanıcı ID</th>
              <th>Email</th>
              <th>Adı</th>
              <th>Telefon Numarası</th>
              <th>Konum</th>
              <th>Doğum Tarihi</th>
              <th>Date created</th>
            </tr>
            {user_list.filter((val) => {
              if (filterData === 'email') {
                return search.toLowerCase() === '' ? val : val.email.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'name') {
                return search.toLowerCase() === '' ? val : val.name.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'phone_number') {
                return search.toLowerCase() === '' ? val : val.phone_number.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'location') {
                return search.toLowerCase() === '' ? val : val.location.toLowerCase()
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
                <tr key={key} >
                  <td>{val.id}</td>
                  <td>{val.email}</td>
                  <td>{val.name}</td>
                  <td>{val.phone_number}</td>
                  <td>{val.location}</td>
                  <td>{moment(val.date_of_birth).format('L')}</td>
                  <td>{moment(val.date_created).format('L')}</td>
                  <button onClick={() => deleteItem(val.id)} style={{ margin: '35px 0', padding: 15 }}>Sil</button>
                </tr>
              )
            })}
          </table>


        </div>

      </div>
    </div>
  )
}

export default AdminUsers
