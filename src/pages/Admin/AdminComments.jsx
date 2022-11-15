import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import moment from 'moment'
import Layout from './Layout';
const AdminComments = () => {
    const [caravan_list, SetCaravan_list] = useState([]);

    const getCaravan = () => {
        Axios.get("https://caravinn-test.herokuapp.com/api/comment/").then((response) => {
            SetCaravan_list(response.data)
        }, [])
    }

    useEffect(() => {
        getCaravan()
    }, [])

    const deleteItem = (id) => {
        Axios.delete(`https://caravinn-test.herokuapp.com/api/comment/${id}`).then((response) => {
            console.log(response)
            getCaravan()
        })
    }
    return (
        <div style={{ display: 'flex', height: '100%' }}>
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
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminComments
