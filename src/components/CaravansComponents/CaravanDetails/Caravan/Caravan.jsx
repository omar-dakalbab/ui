import React, { useEffect, useCallback } from 'react'
import "./caravan.css"

import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react'
import { ImageViewer } from "react-image-viewer-dv"

const Caravan = () => {
    const { id } = useParams()
    const [caravan, SetCaravan] = useState([]);
    const [file, setFiles] = useState()
    const [liked, SetLiked] = useState(false)
    const [likeData, setLikeData] = useState({});
    const [img, setImage] = useState({});
    const [user_id, SetUserId] = useState('null')
    const auth = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if (auth) {
            SetUserId(auth.id)
        } else {
            SetUserId(null)
        }
        caravan.map((val, key) => {
            setFiles(val.images)
        })
        if (file) {
            var urls = file;
            var array = urls.split(',');
            setImage(array)
        }
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        Axios.get(`https://caravinn-test.herokuapp.com/api/caravan/${id}`).then((response) => {
            SetCaravan(response.data)
        })
        Axios.get(`https://caravinn-test.herokuapp.com/api/like/${id}/${user_id}`, config).then((response) => {
            setLikeData(response.data)
            if (likeData.length > 0) {
                SetLiked(true)
            } else {
                SetLiked(false)
            }
        })
    })


    const insertLike = async () => {
        try {
            await Axios.post(`https://caravinn-test.herokuapp.com/api/like/likeInsert/${id}/${user_id}`).then((response) => {
                console.log(response)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

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
                                    <ImageViewer>
                                        <img src={process.env.PUBLIC_URL + `/img/${img[0]}`} style={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} alt="" />
                                    </ImageViewer>
                                </div>
                                <div className="small-images">
                                    <ImageViewer>
                                        <img src={process.env.PUBLIC_URL + `/img/${img[1]}`} alt="" style={{ borderTopRightRadius: 15 }} />
                                    </ImageViewer>
                                    <ImageViewer>
                                        <img src={process.env.PUBLIC_URL + `/img/${img[2]}`} alt="" />
                                    </ImageViewer>
                                    <ImageViewer>
                                        <img src={process.env.PUBLIC_URL + `/img/${img[3]}`} alt="" />
                                    </ImageViewer>
                                    <ImageViewer>
                                        <img src={process.env.PUBLIC_URL + `/img/${img[4]}`} alt="" style={{ borderBottomRightRadius: 15 }} />
                                    </ImageViewer>
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

                                    {liked ?
                                        <button style={{ backgroundColor: '#FFF', color: "#1E98C7" }} onClick={insertLike}>Favoriden Çıkar</button>
                                        :
                                        <button style={{ backgroundColor: '#FFF', color: "#1E98C7" }} onClick={insertLike}>Favoriye Ekle</button>
                                    }


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
