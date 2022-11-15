import React, { useState, useEffect} from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'
import moment from 'moment'
const AdminUsers = () => {
  const [user_list, SetUser_list] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/user/").then((response) => {
      SetUser_list(response.data)
    }, [])
  }

  useEffect(() => {
    getUsers()
  }, [])
  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3001/api/user/remove-user/${id}`).then((response) => {
      console.log(response)
      getUsers()
    })
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Layout />
      <div className="admin-page-content">
        <div className="table">
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
            {user_list.map((val, key) => {
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
