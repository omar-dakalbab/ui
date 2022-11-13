import React, { useState, useRef } from 'react'
import './style.css'
import bg from './bg.png'
import Axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
const KirayaVerinComp = () => {
    const interviewDateRef = useRef();
    const handleInterviewDateClick = () => {
        interviewDateRef.current.focus();
    };
    const [inputs, setInputs] = useState({
        startDate: "",
        endDate: "",
        marka: "",
        model_year: "",
        made_year: "",
        price: "",
        caravan_type: "",
        first_name: "",
        last_name: "",
        number: "",
        email: "",
        description: "",
        location: "",
        fuel_type: "",
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { currentUser } = useContext(AuthContext)
    const handleClick = async e => {
        e.preventDefault()

        try {
            await Axios.post(`https://caravinn-test.herokuapp.com/api/rent/send-requset/${currentUser.id}`, inputs).then((response) => {
                console.log(response)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='kiraya-verin-comp'>
            <div className="kiraya-verin-left">
                <span>Karavanınızı</span>
                <h1>Kiraya verin</h1>

                <span id='child-2'>Karavan Bilgileri</span>
                <div className="kiraya-verin-radio-btn">
                    <div className="radio-btn" >
                        <input onChange={handleChange} type="radio" name='caravan_type' value={'Moto'} />
                        <label className='label'>Moto Karavan</label>
                    </div>
                    <div className="radio-btn" style={{ marginLeft: 15 }}>
                        <input onChange={handleChange} type="radio" name='caravan_type' value={'Çekme'} />
                        <label className='label'>Çekme Karavan</label>
                    </div>
                </div>
                <input onChange={handleChange} id='bedel' type="text" name='marka' placeholder='Marka' />
                <input onChange={handleChange} id='bedel' type="text" name='model_year' placeholder='Araç Model yılı' />
                <input onChange={handleChange} id='bedel' type="text" name='made_year' placeholder='Karavan Yapım Yılı' />
                <input onChange={handleChange} id='bedel' type="text" name='location' placeholder='Karavan yeri' />
                <input onChange={handleChange} id='bedel' type="text" name='fuel_type' placeholder='Karavan yakıt türü' />
                <input onChange={handleChange} id='bedel' type="text" name='price' placeholder='Günlük Kiralama Bedeli' />
                <label> Choose your rent date:</label>
                <div className="dates" style={{ display: 'flex', width: '100%', marginTop: '5px' }}>
                    <input style={{ width: '49%' }} onChange={handleChange} id='bedel' type="date" name='startDate' />
                    <input style={{ width: '49%', marginLeft: '15px' }} onChange={handleChange} onClick={handleInterviewDateClick} ref={interviewDateRef} id='bedel' type="date" name='endDate' />
                </div>
                <div className="file-images">
                    <input type="file" name="" id="" />
                    <input type="file" name="" id="" />
                    <input type="file" name="" id="" />
                    <input type="file" name="" id="" />
                    <input type="file" name="" id="" />
                </div>
                <div className="kisisel-bilgi">
                    <span>Kişisel Bilgiler</span>
                    <div className="name">
                        <input onChange={handleChange} type="text" name='first_name' placeholder=' Adınız' />
                        <input onChange={handleChange} type="text" name='last_name' placeholder=' Soyadı' />
                    </div>
                    <input onChange={handleChange} type="text" name='number' placeholder=' Telefon' />
                    <input onChange={handleChange} type="text" name='email' placeholder=' Eposta' />
                    {/* <input type="text" placeholder=' Şifre' />
                    <input type="text" placeholder=' Şifre Tekrar' /> */}
                    <textarea onChange={handleChange} id='aciklama' name='description' type="text" placeholder=' Açıklama Girin' />

                    <input id='btn-gonder' type="button" value=' Gönder' onClick={handleClick} />
                </div>
            </div>
            <div className="kiraya-verin-right">
                <img src={bg} alt="" />
            </div>
        </div>
    )
}

export default KirayaVerinComp
