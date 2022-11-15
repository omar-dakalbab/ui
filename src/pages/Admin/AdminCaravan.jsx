import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'


const AdminCaravan = () => {
  const [inputs, setInputs] = useState({
    caravan_title: "",
    road: "",
    fuel_type: "",
    caravan_type: "",
    price: "",
    location: "",
  })

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInsert = async e => {
    e.preventDefault()

    try {
      await Axios.post("https://caravinn-test.herokuapp.com/api/caravan/add", inputs)
    }
    catch (err) {
      console.log(err)
    }
    getCaravan()
  }

  const [caravan_list, SetCaravan_list] = useState([]);

  const getCaravan = () => {
    Axios.get("https://caravinn-test.herokuapp.com/api/caravan/").then((response) => {
      SetCaravan_list(response.data)
    }, [])
  }

  useEffect(() => {
    getCaravan()
  }, [])

  const deleteItem = (id) => {
    Axios.delete(`https://caravinn-test.herokuapp.com/api/caravan/delete/${id}`).then((response) => {
      console.log(response)
      getCaravan()
    })
  }
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Layout />
      <div className="admin-page-content">
        <div className="insert-blog">

          <span className='input-data'>
            <label>Caravan:</label>
            <input type="text" name='caravan_title' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Yol:</label>
            <input type="text" name='road' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Yakıt Türü:</label>
            <input type="text" name='fuel_type' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Caravan Türü:</label>
            <input type="text" name='caravan_type' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Fiyat:</label>
            <input type="text" name='price' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Konum:</label>
            <input type="text" name='location' onChange={handleChange} />
          </span>

          <button id='insert' onClick={handleInsert}>Insert Caravan</button>
        </div>
        <br />

        <div className="table">

          <table>
            <tr>
              <th>Caravan ID</th>
              <th>Caravan Title</th>
              <th>Road</th>
              <th>Fuel Type</th>
              <th>Caravan Type</th>
              <th>Price</th>
              <th>Location</th>
              <th>Rented</th>
            </tr>
            {caravan_list.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.caravan_title}</td>
                  <td>{val.road}</td>
                  <td>{val.fuel_type}</td>
                  <td>{val.caravan_type}</td>
                  <td>{val.price}</td>
                  <td>{val.location}</td>
                  <td>{val.rented}</td>
                  <Link to={`update/${val.id}`}><button style={{margin: 10, padding: 15 }}>Düzenle</button></Link>
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

export default AdminCaravan
