import React, { useState, useEffect } from 'react'
import road from '../../../assets/road.svg'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import benzin from '../../../assets/benzin.svg'
import cara from '../../../assets/cara.svg'
import './card.css'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
const Card = (props) => {
    const [likeData, setLikeData] = useState({});
    const id = props.cardid;
    const userid = props.userid;
    const [liked, SetLiked] = useState(false)
    useEffect(() => {
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
        <div className="card">
            {userid ?
                <div className="like-button" onClick={insertLike}>
                    {liked ? <FavoriteOutlinedIcon /> : <FavoriteTwoToneIcon style={{ color: '#fff' }} />}
                </div>
                :
                <div></div>
            }
            <NavLink style={{ color: '#000' }} to={`/caravan/${id}`}>
                <img src={props.img} alt='' />
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
            </NavLink>
        </div>

    )
}

export default Card