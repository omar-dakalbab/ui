import React, { useState, useEffect } from 'react'
import road from '../../../assets/road.svg'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import benzin from '../../../assets/benzin.svg'
import cara from '../../../assets/cara.svg'

import './card.css'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import promotion from './promotion.png'

const Card = (props) => {
    
    const id = props.cardid;
    const userid = props.userid;
    const [liked, SetLiked] = useState(false)
    const [likeData, setLikeData] = useState({});
    const [promoted, SetPromoted] = useState(false)
    const [img, setImage] = useState({});
    useEffect(() => {
        if (props.img) {
            var urls = props.img;
            var array = urls.split(',');
            setImage(array)
        }
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        Axios.get(`https://caravinn-test.herokuapp.com/api/like/${id}/${userid}`, config).then((response) => {
            setLikeData(response.data)
            if (likeData.length > 0) {
                SetLiked(true)
            } else {
                SetLiked(false)
            }
        })
        const pr = props.pr;
        if (pr == 1) {
            SetPromoted(true)
        } else {
            SetPromoted(false)
        }
    })

    const insertLike = async () => {
        try {
            await Axios.post(`https://caravinn-test.herokuapp.com/api/like/likeInsert/${id}/${userid}`).then((response) => {
                console.log(response)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="card" style={{ width: 350, height: '100%' }}>
            {userid ?
                <div className="like-button" onClick={insertLike}>
                    {liked ? <FavoriteOutlinedIcon /> : <FavoriteTwoToneIcon style={{ color: '#fff' }} />}
                </div>
                :
                <div></div>
            }
            <NavLink style={{ color: '#000', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} to={`/caravan/${id}`}>
                <div>
                    {promoted ?
                        <div className="promoted">
                            <img src={promotion} alt="" />
                        </div>
                        :
                        <div></div>
                    }
                    <div style={{textAlign: 'center', width: '330px'}}>
                    <img src={process.env.PUBLIC_URL + `/img/${img[0]}`} style={{ borderRadius: 15, width: 'auto', maxWidth: '330px', maxHeight: '220px' }} alt='' />
                    </div>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <hr />


                    <div className="location">
                        <p>{props.price} TL</p>
                    </div>

                    <hr />

                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{props.location}</p>
                    </div>

                    <hr />
                    <div className="icons">
                        <div className="icon">
                            <img src={road} alt="" />
                            <p>{props.road}</p>
                        </div>
                        <div className="icon">
                            <img src={benzin} alt="" />
                            <p>{props.fuel}</p>
                        </div>
                        <div className="icon">
                            <img src={cara} alt="" />
                            <p>{props.type}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>

    )
}

export default Card