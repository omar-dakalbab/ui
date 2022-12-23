import React, { useState, useEffect } from 'react'
import './style.css'
import bg from './bg.png'
import pr from './pr.png'
import { NavLink } from 'react-router-dom'
import road from '../../../assets/road.svg'
import benzin from '../../../assets/benzin.svg'
import cara from '../../../assets/cara.svg'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
const AdvertCard = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#FFF',
        boxShadow: 24,
        borderRadius: '30px'
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [promoted, SetPromoted] = useState(false)

    const promoteCard = () => {
        axios.put(`http://104.247.164.103/api/caravan/promote-caravan/${props.cardid}`).then((response) => {
            window.location.reload();
        })
    }

    useEffect(() => {
        const pr = props.pr;
        if (pr === 1) {
            SetPromoted(true)
        } else {
            SetPromoted(false)
        }
    }, [])
    return (
        <div className={`fav-card ${promoted ? "line-promote" : ""}`} style={{ height: '580px' }}>
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
                        <div className="promote-title" >
                            İLANI ÖNE ÇIKAR!

                        </div>
                    </Typography>
                    {/*  */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div
                            className="change-password"
                            style={{ display: 'flex', padding: '25px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ marginBottom: 15 }}>24 Saat boyunca ilanı öner çıkar!</span>
                            <img src={pr} alt="" style={{ marginBottom: 15, width: '125px', height: '125px', borderRadius: '36px' }} />
                            <span>Chevrolet X30 Çekme Karavan</span>
                            <span>Ödeme Bilgileri</span>
                            <input type="text" placeholder='Kart Numaranız' style={{ width: '100%' }} />
                            <input type="text" placeholder='Kart Sahibinin Adı' style={{ width: '100%' }} />
                            <input type="text" placeholder='CVC Kodu' style={{ width: '100%' }} />
                            <input type="text" placeholder='Son Kullanım Tarihi' style={{ width: '100%' }} />
                            <button
                                onClick={promoteCard}
                                style={{
                                    width: '100%',
                                    padding: '13px',
                                    background: 'linear-gradient(94.76deg, #117AA7 9.47%, #0DA2C9 73.37%)',
                                    borderRadius: '60px',
                                    color: '#FFF',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    marginTop: '10px'
                                }}
                            >
                                İlanı Öner Çıkar 
                            </button>
                        </div>

                    </Typography>
                </Box>
            </Modal>

            <div className="edit-btn">
                <NavLink style={{ color: '#1E98C7' }} to={`edit/${props.cardid}`}>
                    <button>Düzenle</button>
                    
                </NavLink>
            </div>
            {promoted ?
                <div className="promote-btn">
                    <button>Süper İlan</button>
                </div>
                :
                <div></div>
            }


            <img src={bg} alt='' />
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
            {promoted ?
                <div className="promote-me">
                    <button>Süper İlan</button>
                </div>
                :
                <div className="promote-me-btn">
                    <div className='plus-icon'><AddIcon style={{ color: '#fff' }} /></div>
                    <button onClick={handleOpen}>Bu İlanı Öner Çıkar</button>
                </div>
            }
        </div >
    )
}

export default AdvertCard
