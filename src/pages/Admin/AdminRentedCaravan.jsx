import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import Layout from './Layout'
const AdminRentedCaravan = () => {
    const [user_list, SetUser_list] = useState([]);

    const getUsers = () => {
        axios.get("http://104.247.164.103/api/caravan/cr").then((response) => {
            SetUser_list(response.data)
        }, [])
    }

    useEffect(() => {
        getUsers()
    }, [])



    return (
        <div className='admin-panel'>
            <Layout />
            <div className="admin-page-content">
                <div className="table">
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Caravan ID</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        {user_list.map((val, key) => {
                            return (
                                <tr key={key} >
                                    <td>{val.id}</td>
                                    <td>{val.userId}</td>
                                    <td>{val.caravanId}</td>
                                    <td>{moment(val.startDate).format('L')}</td>
                                    <td>{moment(val.endDate).format('L')}</td>
                                </tr>
                            )
                        })}
                    </table>


                </div>

            </div>
        </div>
    )
}

export default AdminRentedCaravan
