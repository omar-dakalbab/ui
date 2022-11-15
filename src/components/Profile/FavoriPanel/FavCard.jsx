import React, { useState, useEffect } from 'react'
import './style.css'
import road from '../../../assets/road.svg'
import benzin from '../../../assets/benzin.svg'
import cara from '../../../assets/cara.svg'
import Axios from 'axios'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
const FavCard = (props) => {
    
    const [likeData, setLikeData] = useState({});
    const id = props.cardid;
    const { currentUser } = useContext(AuthContext)

    const [liked, SetLiked] = useState(false)
    useEffect(() => {
        checkLikes()
    })
    const checkLikes = () => {

        Axios.get(`http://localhost:3001/api/like/${id}/${currentUser.id}`).then((response) => {
            setLikeData(response.data)
            if (likeData.length > 0) {
                SetLiked(true)
            } else {
                SetLiked(false)
            }
        })
    }

    const insertLike = async () => {
        try {
            await Axios.post(`http://localhost:3001/api/like/likeInsert/${id}/${currentUser.id}`).then((response) => {
                console.log(response)

            })
        }
        catch (err) {
            console.log(err)
        }
        checkLikes()
    }
    return (
        <div className="fav-card">

            <div className="like-button" onClick={insertLike}>
                {liked ? <FavoriteOutlinedIcon /> : <FavoriteTwoToneIcon style={{ color: '#fff' }} />}
            </div>
            <img src={props.img} alt='' />
            <h3>{props.title}</h3>

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
    )
}

export default FavCard
