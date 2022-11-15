import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './update.css'
import Axios from 'axios'
import { useEffect } from 'react';

const CaravanUpdate = () => {
    const { id } = useParams()
    const getCaravan = () => {
        Axios.get(`https://caravinn-test.herokuapp.com/api/caravan/${id}`).then((resp) => {
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
    }
    const [state, setState] = useState(initialState);
    const { caravan_title, road, fuel_type, caravan_type, price, location, rented } = state;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = () => {
        Axios
            .put(`https://caravinn-test.herokuapp.com/api/caravan/update/${id}`, {
                caravan_title,
                road,
                fuel_type,
                caravan_type,
                price,
                location,
                rented,
            })
            .then(() => {
                setState({ caravan_title: "", road: "", fuel_type: "", caravan_type: "", price: "", location: "", rented: "" })
            })
            .catch((err) => console.log(err));
        nav('/admin/caravans')
    }
    return (
        <div className='update-panels' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id='title'
                    name='caravan_title'
                    placeholder='title'
                    value={caravan_title || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="road">Road</label>
                <input
                    type="text"
                    id='road'
                    name='road'
                    placeholder='road'
                    value={road || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="fuel">Fuel</label>
                <input
                    type="text"
                    id='fuel'
                    name='fuel_type'
                    placeholder='fuel'
                    value={fuel_type || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <input
                    type="text"
                    id='type'
                    name='caravan_type'
                    placeholder='type'
                    value={caravan_type || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    id='price'
                    name='price'
                    placeholder='price'
                    value={price || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id='location'
                    name='location'
                    placeholder='location'
                    value={location || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Rented</label>
                <input
                    type="text"
                    id='rented'
                    name='rented'
                    placeholder='rented'
                    value={rented || ""}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Güncelle" onClick={handleSubmit} />
        </div>
    )
}

export default CaravanUpdate
