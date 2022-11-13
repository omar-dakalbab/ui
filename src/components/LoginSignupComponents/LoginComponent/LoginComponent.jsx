import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext.js'
import './logincomponent.css'

const LoginComponent = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate()
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const { login } = useContext(AuthContext)
  const [errorMsg, setErrorMsg] = useState(null)
  const validateInputs = () => {

    if (inputs.email.trim().length !== 0 && inputs.password.trim().length !== 0) {
      handleLogin()
    } else {
      setErrorMsg('Bilgilerinizi girin!')
    }
  }
  const handleLogin = async () => {
    try {
      await login(inputs)
      setErrorMsg('Giriş yapılıyor...')
      await delay(1000);
      window.location.reload();
    }
    catch (err) {
      if (err) {
        setErrorMsg('Email veya şifreniz hatalıdır!')
      }
    }

  };
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('user'))
    if (auth) {
      navigate('/profile')
    }
  })




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
        <h4>Hesabınız Yoksa, <NavLink to="/sign-up">Kayıt Olun</NavLink></h4>
      </div>
    </div>
  )
}

export default LoginComponent