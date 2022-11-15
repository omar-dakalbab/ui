import React, { useState, useEffect } from 'react'
import './commentscomp.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { FaReply } from 'react-icons/fa'
import profile from './profile.png'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useContext } from 'react'
import { AuthContext } from '../../../../context/authContext'
const CommentsComp = () => {
    let { blogId } = useParams();
    const [comment, setComment] = useState([]);
    const [user, setUser] = useState([]);
    const getComments = () => {
        Axios.get(`https://caravinn-test.herokuapp.com/api/comment/get-comments/${blogId}`).then((resp) => {
            setComment(resp.data)
        })
        Axios.get(`https://caravinn-test.herokuapp.com/api/user/${comment.userId}`).then((resp) => {
            setUser({
                name: resp.data[0].name
            })
            console.log(user.name)
        })
    }

    useEffect(() => {
        getComments()
    }, [])
    return (
        <div className="comments-comp" style={{ marginTop: '10px' }}>
            <h2 style={{ fontWeight: 500, marginBottom: 15 }}>Yorumlar</h2>
            {comment === [] ? (
                <h1>Loading...</h1>
            ) : (
                comment.map((val, key) => {

                    return (
                        <div style={{ marginBottom: '35px' }}>
                            <div className="comment-card" key={key}>
                                <div className="quantity-card">
                                    <AiOutlinePlus />
                                    <span>{val.rate}</span>
                                    <AiOutlineMinus />
                                </div>
                                <div className="comment-card-content" >
                                    <div className="comment-card-flex">
                                        <div className="prof">
                                            <img src={profile} alt="profile-img" />
                                            <h3>{user.name}</h3>
                                            <span>{moment(val.date_created).fromNow()}</span>
                                        </div>
                                        {/* <div className="reply-btn">
                                            <FaReply />
                                            <span>Yanitla</span>
                                        </div> */}
                                    </div>
                                    <div className="comment-content">
                                        <p>{val.comment}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default CommentsComp