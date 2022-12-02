import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import Axios from 'axios'
import moment from 'moment'

const AdminCommentApprove = () => {
    // const [inputs, setInputs] = useState({
    //     comment_id: "",
    //     comment: "",
    //     blog_id: "",
    //     user_id: "",
    //     rate: "",
    //     date_created: "",
    // })

    // const handleChange = (e) => {
    //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    // const handleInsert = async e => {
    //     e.preventDefault()

    //     try {
    //         await Axios.post("https://caravinn-test.herokuapp.com/api/caravan/add", inputs)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    //     getCaravan()
    // }

    const [caravan_list, SetCaravan_list] = useState([]);

    const getCaravan = () => {
        Axios.get("https://caravinn-test.herokuapp.com/api/comment/get-comments").then((response) => {
            SetCaravan_list(response.data)
        }, [])
    }

    useEffect(() => {
        getCaravan()
    }, [])

    const deleteItem = (id) => {
        Axios.delete(`https://caravinn-test.herokuapp.com/api/comment/delete-comment/${id}`).then((response) => {
            console.log(response)
            getCaravan()
        })
    }

    const approveItem = (id) => {
        Axios.post(`https://caravinn-test.herokuapp.com/api/comment/approve-comment/${id}`).then((response) => {
            console.log(response)
            deleteItem(id)
            getCaravan()
        })
    }

    return (
        <div className='admin-panel'>
            <Layout />
            <div className="admin-page-content">

                <div className="table">

                    <table>
                        <tr>
                            <th>Comment ID</th>
                            <th>Comment</th>
                            <th>Post ID</th>
                            <th>User ID</th>
                            <th>Rate</th>
                            <th>Date Created</th>
                        </tr>
                        {caravan_list.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.comment}</td>
                                    <td>{val.postId}</td>
                                    <td>{val.userId}</td>
                                    <td>{val.rate}</td>
                                    <td>{moment(val.date_created).fromNow()}</td>
                                    <button onClick={() => deleteItem(val.id)} style={{ margin: 10, padding: 15 }}>Sil</button>
                                    <button onClick={() => approveItem(val.id)} style={{ margin: 10, padding: 15 }}>Approve</button>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminCommentApprove
