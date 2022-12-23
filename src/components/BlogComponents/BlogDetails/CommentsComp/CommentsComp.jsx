import React, { useState, useEffect } from 'react'
import './commentscomp.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import profile from './profile.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'
const CommentsComp = () => {
    let { blogId } = useParams();
    const [comment, setComment] = useState([]);

    const getComments = () => {
        axios.get(`http://104.247.164.103/api/comment/get-comments/${blogId}`).then((resp) => {
            setComment(resp.data)
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
                                            <h3>{val.name}</h3>
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