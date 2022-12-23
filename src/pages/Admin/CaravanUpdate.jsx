import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './update.css'
import axios from 'axios'
import { useEffect } from 'react';
import Layout from './Layout'
const CaravanUpdate = () => {
    const { id } = useParams()
    const getCaravan = () => {
        axios.get(`http://104.247.164.103/api/caravan/${id}`).then((resp) => {
            setState({ ...resp.data[0] })
        })
    }

    useEffect(() => {
        getCaravan()
    }, [id])
    const nav = useNavigate()
    const initialState = {
        caravan_title: "",
        road: "",
        fuel_type: "",
        caravan_type: "",
        price: "",
        location: "",
        rented: "",
        pr: "",
        images: "",
    }
    const [state, setState] = useState(initialState);
    const { caravan_title, road, fuel_type, caravan_type, price, location, rented, pr, images } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = () => {
        axios
            .put(`http://104.247.164.103/api/caravan/update/${id}`, {
                caravan_title,
                road,
                fuel_type,
                caravan_type,
                price,
                location,
                rented,
                pr,
                images,
            })
            .then(() => {
                setState({
                    caravan_title: "",
                    road: "",
                    fuel_type: "",
                    caravan_type: "",
                    price: "",
                    location: "",
                    rented: "",
                    pr: "",
                    images: "",
                })
            })
            .catch((err) => console.log(err));
        nav('/admin/caravans')
    }
    return (
        <div className='admin-panel'>
            <Layout />
            <div className="admin-page-content">
                <div className="insert-blog">
                    <div className='input-data'>
                        <label htmlFor="title">Karavan Başlığı</label>
                        <input
                            type="text"
                            id='title'
                            name='caravan_title'
                            placeholder='title'
                            value={caravan_title || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="road">Yol</label>
                        <input
                            type="text"
                            id='road'
                            name='road'
                            placeholder='road'
                            value={road || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="fuel">Yakıt</label>
                        <input
                            type="text"
                            id='fuel'
                            name='fuel_type'
                            placeholder='fuel'
                            value={fuel_type || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="type">Karavan Türü</label>
                        <input
                            type="text"
                            id='type'
                            name='caravan_type'
                            placeholder='type'
                            value={caravan_type || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="price">Fiayt</label>
                        <input
                            type="text"
                            id='price'
                            name='price'
                            placeholder='price'
                            value={price || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="location">İlçe</label>
                        <input
                            type="text"
                            id='location'
                            name='location'
                            placeholder='location'
                            value={location || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="location">Durumu</label>
                        <input
                            type="text"
                            id='rented'
                            name='rented'
                            placeholder='rented'
                            value={rented || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="pr">Pr</label>
                        <input
                            type="text"
                            id='pr'
                            name='pr'
                            placeholder='pr'
                            value={pr || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-data'>
                        <label htmlFor="images">Images</label>
                        <textarea
                            type="text"
                            id='images'
                            name='images'
                            placeholder='images'
                            value={images || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <button id='insert' onClick={handleSubmit}>Güncelle</button>
                </div>
            </div>

        </div>
    )
}

export default CaravanUpdate
