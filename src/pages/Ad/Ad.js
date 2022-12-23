import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const nav = useNavigate();
    const validateInputs = () => {

        if (inputs.email.trim().length !== 0 && inputs.password.trim().length !== 0) {
            handleLogin()
        } else {
            setErrorMsg('Bilgilerinizi girin!')
        }
    }
    const handleLogin = async () => {
        try {
            axios.post(`http://104.247.164.103/api/auth/log`, inputs).then((res) => {
                if (res.data == 'ok!') {
                    nav('/admin')
                }
            })
        }
        catch (err) {
            if (err) {
                console.log(err)
            }
        }

    };
    const [errorMsg, setErrorMsg] = useState(null)
    return (
        <div className='login-component'>
            <div className="login-title">
                <h1>Caravınn Hesabınıza Giriş Yapın</h1>
                <p>Tekrar Hoşgeldiniz, aşağıdan hızlıca  <br /> giriş yapabilirsiniz.</p>
            </div>
            <div className="login-card">
                <p style={{ textAlign: 'center', marginBottom: 15 }}>{errorMsg && errorMsg}</p>
                <input type="text" name="email" placeholder='Mail Adresiniz'
                    onChange={handleChange}
                />
                <input type="password" name="password" placeholder='Şifreniz'
                    onChange={handleChange}
                />
                <button onClick={validateInputs}>Giriş Yap</button>
            </div>
        </div>
    )
}

export default AdminLogin
