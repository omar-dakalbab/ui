import React, { useContext, useEffect, useState } from 'react'
import LeftMenu from '../LeftMenu/LeftMenu'
import './style.css'
import profile from './profile-pic.png'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext'
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import MailOutlinedIcon from "@mui/icons-material/MailOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import PersonIcon from '@mui/icons-material/Person';
const Edit = () => {

  const nav = useNavigate()

  const { currentUser } = useContext(AuthContext)

  const [user, setUser] = useState({});
  const getUser = () => {
    Axios.get(`http://localhost:3001/api/user/${currentUser.id}`).then((resp) => {
      setState({ ...resp.data[0] })
    })
  }
  useEffect(() => {
    getUser();
  }, [currentUser.id]);

  const initialState = {
    name: "",
    email: "",
    phone_number: "",
    location: "",
  }
  const [state, setState] = useState(initialState);
  const { name, email, phone_number, location } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  const handleSubmit = () => {
    console.log(currentUser.id)
    Axios
      .put(`http://localhost:3001/api/user/edit-user/${currentUser.id}`, {
        name,
        email,
        phone_number,
        location,
      })
      .then((response) => {
        console.log(response)
        setState({ name: "", email: "", phone_number: "", location: "" })
      })
    nav('/profile')
  }

  return (
    <div className='edit-panel'>
      <LeftMenu />
      <div className="edit-panel-content">
        <button id='geri'><NavLink style={{ color: '#FFF' }} to={'/profile'}>Geri</NavLink></button>
        <h1>Profil Bilgilerini Düzenle</h1>
        <div className="edit-card">
          <img src={profile} alt="" />
          <span id='icon-flex'>
            <PersonIcon className='user-icon' />
            <input onChange={handleChange} name='name' type="text" value={name || ""} />
          </span>
          <span id='icon-flex'>
            <MailOutlinedIcon className='user-icon' />
            <input onChange={handleChange} name='email' type="text" value={email || ""} />
          </span>
          <span id="icon-flex">
            <CallOutlinedIcon className='user-icon' />
            <input onChange={handleChange} name='phone_number' type="text" value={phone_number || ""} />
          </span>
          <span id="icon-flex">
            <LocationOnOutlinedIcon className='user-icon'/>
            <input onChange={handleChange} name='location' type="text" value={location || ""} />
          </span>
          <button onClick={handleSubmit}>kaydet</button>
        </div>
      </div>
    </div>
  )
}

export default Edit
