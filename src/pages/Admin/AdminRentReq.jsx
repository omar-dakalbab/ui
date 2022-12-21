import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'


const AdminRentReq = () => {
    const [user_list, SetUser_list] = useState([]);
    const [file, setFiles] = useState()
    const [img, setImage] = useState({});

    const getUsers = () => {
        Axios.get("https://caravinn-test.herokuapp.com/api/rent/get-caravan-req").then((response) => {
            SetUser_list(response.data)
        }, [])
    }

    useEffect(() => {
        user_list.map((val, key) => {
            setFiles(val.images)
        })
        if (file) {
            var urls = file;
            var array = urls.split(',');
            setImage(array)
        }
        getUsers()
    })
    const deleteItem = (id) => {
        Axios.delete(`https://caravinn-test.herokuapp.com/api/rent/delete/${id}`).then((response) => {
            console.log(response)
            getUsers()
        })
    }

    const approveReq = (id) => {
        Axios.get(`https://caravinn-test.herokuapp.com/api/rent/approve-request/${id}`).then((response) => {
            console.log(response.data)
            deleteItem(id)
        })
    }
    
    return (
        <div className='admin-panel'>
            <Layout />
            <div className="admin-page-content">
                <div className="table is">
                    <table style={{ maxWidth: '500px !important' }}>
                        <tr>
                            <th>İstek ID</th>
                            <th>Caravan</th>
                            <th>Caravan Markası</th>
                            <th>Model Yılı</th>
                            <th>Üretim Yılı</th>
                            <th>Fiyat</th>
                            <th>Konum</th>
                            <th>Yakıt</th>
                            <th>Adı</th>
                            <th>Soyadı</th>
                            <th>Telefon Numarası</th>
                            <th>Email</th>
                            <th>Tanım</th>
                            <th>By:::</th>
                            <th>photo</th>
                        </tr>
                        {user_list.map((val, key) => {
                            return (
                                <tr key={key} >
                                    <td>{val.id}</td>
                                    <td>{val.caravan_type}</td>
                                    <td>{val.caravan_marka}</td>
                                    <td>{val.model_year}</td>
                                    <td>{val.made_year}</td>
                                    <td>{val.price}</td>
                                    <td>{val.location}</td>
                                    <td>{val.fuel_type}</td>
                                    <td>{val.first_name}</td>
                                    <td>{val.last_name}</td>
                                    <td>{val.number}</td>
                                    <td>{val.email}</td>
                                    <td>{val.description}</td>
                                    <td>{val.userId}</td>
                                    <td> 
                                        <img src={process.env.PUBLIC_URL + `/img/${img[0]}`} style={{ width: '50px' }} alt="" />
                                        <img src={process.env.PUBLIC_URL + `/img/${img[1]}`} style={{ width: '50px' }} alt="" />
                                        <img src={process.env.PUBLIC_URL + `/img/${img[2]}`} style={{ width: '50px' }} alt="" />
                                        <img src={process.env.PUBLIC_URL + `/img/${img[3]}`} style={{ width: '50px' }} alt="" />
                                        <img src={process.env.PUBLIC_URL + `/img/${img[4]}`} style={{ width: '50px' }} alt="" />
                                        </td>
                                    <button onClick={() => deleteItem(val.id)} style={{ margin: 10, padding: 15 }}>Sil</button>
                                    <button onClick={() => approveReq(val.id)} style={{ margin: 10, padding: 15 }}>Kabul Et</button>

                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminRentReq
