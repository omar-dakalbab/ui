import React, { useContext, useState } from 'react'
import './commentcomp.css'
import profile from '../BlogDetailsWrapper/profile.png'
import axios from 'axios'
import { AuthContext } from '../../../../context/authContext'
import { useParams } from 'react-router-dom'
const CommentComp = (props) => {
    const { currentUser } = useContext(AuthContext)
    let { blogId } = useParams();

    const insertComment = () => {


        axios.post(`http://104.247.164.103/api/comment/insert-comment/${currentUser.id}/${blogId}`, inputs).then((response) => {
            console.log(response.data)

        })
    }
    const [inputs, setInputs] = useState({
        comment: "",
        name: currentUser.name
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <div className='comment-comp'>
            <img src={profile} alt="" />
            <input onChange={handleChange} type="text" name="comment" />
            <input type="submit" value="Yorum Yap" onClick={insertComment} />
        </div>
    )
}

export default CommentComp