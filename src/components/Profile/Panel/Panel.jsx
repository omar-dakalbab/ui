import React, { useEffect, useState, useContext } from 'react'
import './panel.css'
import profilePic from './profile-pic.png'
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import MailOutlinedIcon from "@mui/icons-material/MailOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import OutlinedFlagSharpIcon from "@mui/icons-material/OutlinedFlagSharp"
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined"
import LeftMenu from '../LeftMenu/LeftMenu'
import { NavLink } from 'react-router-dom'
import moment from "moment";
import { AuthContext } from '../../../context/authContext'
import Axios from 'axios'
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
const Panel = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#FFF',
        boxShadow: 24,
        p: 4,
        borderRadius: '30px'
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { currentUser } = useContext(AuthContext)
    const getUser = () => {
        Axios.get(`https://caravinn-test.herokuapp.com/api/user/${currentUser.id}`).then((resp) => {
            setState({ ...resp.data[0] })
        })
    }

    const initialState = {
        name: "",
        email: "",
        phone_number: "",
        location: "",
        date_of_birth: "",
        date_created: ""
    }
    const [state, setState] = useState(initialState);
    const { name, email, phone_number, location, date_of_birth, date_created } = state;
    useEffect(() => {
        getUser()
    });

    const [inputs, setInputs] = useState({
        password: "",
        passwordConfirm: "",
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [pswErorr, setPswError] = useState(null);

    const updatePassword = () => {
        if (inputs.password === inputs.passwordConfirm) {
            try {
                Axios.put(`https://caravinn-test.herokuapp.com/api/user/update-password/${currentUser.id}`, inputs).then((resp) => {
                    setPswError('Şifre Değiştirildi!')
                })
            }
            catch (err) {
                setPswError('Server Error: ' + err)
            }
        }
        else {
            setPswError("Password inputs are not same!")
        }
    }
    return (
        <div className="profile-panel">
            <LeftMenu />
            <div className="profile-info">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className="exit">
                                <span onClick={handleClose}><CloseIcon style={{ color: '#117AA7' }} /></span>
                            </div>
                            <div className="title">
                                Yeni Şifre
                                <hr style={{ margin: '10px 0' }} />
                            </div>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="change-password">
                                <input type="text" name="password" placeholder='Yeni Şifre' onChange={handleChange} />
                                <input type="text" name="passwordConfirm" placeholder='Yeni Şifre Tekrar' onChange={handleChange} />
                                <input type="button" value='Gönder' onClick={updatePassword} />
                                <div className="error">
                                    {pswErorr && pswErorr}
                                </div>
                            </div>

                        </Typography>
                    </Box>
                </Modal>
                <div className='grey-div'></div>
                <button className="change-password" onClick={handleOpen}><KeyIcon style={{ marginRight: '5px' }} /> Change Password</button>
                <NavLink to={`/profile/edit`} ><button className="edit">Düzenle</button></NavLink>
                <img src={profilePic} alt="" />

                <div className="user-information">
                    <h1>{name && name}</h1>
                    <p id="name"><CallOutlinedIcon className='user-icon' />
                        {phone_number && phone_number}
                    </p>
                    <p id="number"><MailOutlinedIcon className='user-icon' />
                        {email && email}
                    </p>
                    <p id="email"><LocationOnOutlinedIcon className='user-icon' />
                        {location && location}
                    </p>
                    <p id="country"><OutlinedFlagSharpIcon className='user-icon' />
                        Üyelik Tarihi:
                        <span style={{ color: '#9D9D9D', marginLeft: 5 }}>
                            {moment(date_created).utc().format('YYYY-MM-DD')}
                        </span>
                    </p>
                    <p id="country"><CakeOutlinedIcon className='user-icon' />
                        Doğum Tarihi:
                        <span style={{ color: '#9D9D9D', marginLeft: 5 }}>
                            {moment(date_of_birth).utc().format('YYYY-MM-DD')}
                        </span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Panel