import React, { useEffect } from 'react'
import "./caravan.css"
import main from './main-img.png'
import side1 from './side1.png'
import side2 from './side2.png'
import side3 from './side3.png'
import side4 from './side4.png'
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react'
const Caravan = () => {
    const { id } = useParams()
    const [caravan, SetCaravan] = useState([]);

    useEffect(() => {

        Axios.get(`http://localhost:3001/api/caravan/${id}`).then((response) => {
            SetCaravan(response.data)
        })
    })

    return (
        <div style={{ padding: '50px 10%' }}>
            {caravan === [] ? (
                <h1>Loading...</h1>
            ) : (
                caravan.map((val, key) => {
                    return (
                        <div className='caravan-details-header'>
                            <div className="caravan-images">
                                <div className="main-image">
                                    <img src={main} alt="" />
                                </div>
                                <div className="small-images">
                                    <img src={side1} alt="" />
                                    <img src={side2} alt="" />
                                    <img src={side3} alt="" />
                                    <img src={side4} alt="" />
                                </div>
                            </div>
                            <div className="caravan-details">
                                <h1>{val.caravan_title}</h1>
                                <div className="caravan-feauters">
                                    <span><EditRoadOutlinedIcon className='icon-caravan' />{val.road}</span>
                                    <span><LocalGasStationOutlinedIcon className='icon-caravan' />{val.fuel_type}</span>
                                    <span><RvHookupOutlinedIcon className='icon-caravan' />{val.caravan_type}</span>
                                    <span><LocationOnOutlinedIcon className='icon-caravan' />{val.location}</span>
                                    <span><CurrencyLiraOutlinedIcon className='icon-caravan' />{val.price}</span>
                                    <button style={{ backgroundColor: '#1E98C7', marginTop: 25 }}><Link style={{ color: '#FFF' }} to={`/caravan-rezerve/${id}`}>Hemen Rezervasyon Oluştur</Link></button>
                                    <button style={{ backgroundColor: '#FFF', color: "#1E98C7" }}>Favoriye Ekle</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            )}

            <div className="description">
                <button style={{ backgroundColor: '#1E98C7', color: '#FFF', marginTop: 25 }}>Açıklama</button>
                <button style={{ marginLeft: 15, backgroundColor: '#FFF', color: "#1E98C7" }}>Ektsra Hizmetler</button>
                <hr />
                <p>Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız
                    harf ve rakamlardan oluşan küçük bir dosyadır.
                    Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri içerir. Çerez, kabul etmeniz
                    halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan
                    oluşan küçük bir dosyadır. Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri
                    içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın sabit diskinde
                    sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır. Çerezler, bilgisayarınızın
                    sabit diskine aktarılan bilgileri içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya
                    bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır.
                    Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri içerir. Çerez, kabul etmeniz
                    halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan
                    oluşan küçük bir dosyadır. Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri
                    içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın sabit diskinde
                    sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır. Çerezler
                    , bilgisayarınızın sabit diskine aktarılan bilgileri içerir. </p>
                <hr />
            </div>

        </div>
    )
}

export default Caravan
