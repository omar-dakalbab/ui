import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const AdminCaravan = () => {
  const [err, setErr] = useState("");
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
    if (inputs.caravan_title === "" || inputs.road === "" || inputs.fuel_type === "" || inputs.caravan_type === "" || inputs.price === "" || inputs.location === "") {
      setErr("Hata Oluştu, Lütfen boşlukları doldurunuz!");
    } else {
      try {
        await Axios.post("https://caravinn-test.herokuapp.com/api/caravan/add", inputs)
      }
      catch (err) {
        console.log(err)
      }
      getCaravan()
    }

  }

  const [caravan_list, SetCaravan_list] = useState([]);

  const getCaravan = () => {
    Axios.get("https://caravinn-test.herokuapp.com/api/caravan/").then((response) => {
      SetCaravan_list(response.data)
    }, [])
  }

  useEffect(() => {
    getCaravan()
  })

  const deleteItem = (id) => {
    Axios.delete(`https://caravinn-test.herokuapp.com/api/caravan/delete/${id}`).then((response) => {
      getCaravan()
      getCaravan()
    })
  }
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("")


  return (
    <div className='admin-panel'>
      <Layout />
      <div className="admin-page-content">

        <div className="insert-blog" style={{ padding: '35px 15px' }}>

          <span className='input-data'>
            <label>Karavan:</label>
            <input type="text" name='caravan_title' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Yol:</label>
            <input type="text" name='road' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Yakıt Türü:</label>
            <select name='fuel_type' onChange={handleChange} >
              <option disabled={true} value="" selected>
                Seç
              </option>
              <option value="Diesel">Diesel</option>
              <option value="Benzin">Benzin</option>
            </select>
          </span>
          <span className='input-data'>
            <label>Caravan Türü:</label>
            <select name='caravan_type' onChange={handleChange}>
              <option disabled={true} value="" selected>
                Seç
              </option>
              <option value="Çekme">Çekme</option>
              <option value="Moto">Moto</option>
            </select>
            {/* <input type="text" name='caravan_type' onChange={handleChange} /> */}
          </span>
          <span className='input-data'>
            <label>Fiyat:</label>
            <input type="text" name='price' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Konum:</label>
            <input type="text" name='location' onChange={handleChange} />

          </span>

          <button id='insert' onClick={handleInsert} style={{ width: '100%' }}>Karavan Ekle</button>

          {
            err ? (
              <div>
                <p
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    textAlign: 'center',
                    padding: 15,
                    margin: '20px 0',
                    backgroundColor: '#cc0000',
                    transition: '0.7s'
                  }}
                >
                  {err && err}
                </p>
              </div>
            )
              :
              (
                <div></div>
              )
          }
        </div>

        <div className="table">
          <div style={{ display: 'flex' }}>
            <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
            <select id='select-filter' onChange={(e) => setFilterData(e.target.value)}>
              <option value="id">ID</option>
              <option value="caravan_title">caravan_title</option>
              <option value="road">road</option>
              <option value="fuel_type">fuel_type</option>
              <option value="caravan_type">caravan_type</option>
              <option value="price">price</option>
              <option value="location">location</option>
              <option value="rented">rented</option>
            </select>
          </div>
          <table>
            <tr>
              <th>Karavan ID</th>
              <th>Karavan Başlığı</th>
              <th>Yol</th>
              <th>Yakıt türü</th>
              <th>Karavan türü</th>
              <th>Fiyat</th>
              <th>İlçe</th>
              <th>Durumu</th>
            </tr>
            {caravan_list.filter((val) => {
              if (filterData === 'caravan_title') {
                return search.toLowerCase() === '' ? val : val.caravan_title.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'road') {
                return search.toLowerCase() === '' ? val : val.road.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'fuel_type') {
                return search.toLowerCase() === '' ? val : val.fuel_type.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'caravan_type') {
                return search.toLowerCase() === '' ? val : val.caravan_type.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'price') {
                return search.toLowerCase() === '' ? val : val.price.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'location') {
                return search.toLowerCase() === '' ? val : val.location.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'rented') {
                return search.toLowerCase() === '' ? val : val.rented.toLowerCase()
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
                  <td>{val.caravan_title}</td>
                  <td>{val.road}</td>
                  <td>{val.fuel_type}</td>
                  <td>{val.caravan_type}</td>
                  <td>{val.price}</td>
                  <td>{val.location}</td>
                  <td>{val.rented}</td>
                  <div style={{display: 'flex', padding: 24}}> 
                    <Link to={`update/${val.id}`}><button style={{ margin: 10, backgroundColor: 'transparent' }}><ModeEditOutlineOutlinedIcon style={{ color: '#0B91C5' }} /></button></Link>
                    <button onClick={() => deleteItem(val.id)} style={{ margin: 10, backgroundColor: 'transparent' }}><DeleteOutlineOutlinedIcon style={{ color: 'grey' }} /></button>
                  </div>
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
