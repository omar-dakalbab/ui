import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './signupcomponent.css'

const SignupComponent = () => {

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    dateofbirth: "",
  })

  const validate = () => {
    const errors = [];
    if (inputs.name.length === 0) {
      errors.push("Name can't be empty");
      return errors;
    }

    if (inputs.email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
      return errors;
    }
    if (inputs.email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
      return errors;
    }
    if (inputs.email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
      return errors;
    }
    if (inputs.phone.length < 6) {
      errors.push("Phone should be at least 6 charcters long");
      return errors;
    }
    if (inputs.password.length < 6) {
      errors.push("Password should be at least 6 characters long");
      return errors;
    }
    if (inputs.dateofbirth.length === 0) {
      errors.push("Date can't be empty");
      return errors;
    }

    return errors;
  }
  const nav = useNavigate()


  const [errMessage, setErr] = useState(null)
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const handleClick = (e) => {

    e.preventDefault()
    const errors = validate()
    setErr(errors)
    if (errors.length > 0) {
      setErr(errors)
    }
    else {
      try {
        Axios.post("https://caravinn-test.herokuapp.com/api/auth/register", inputs).then((response) => {
          errors.push(response.data)
          setErr("Kayıdınız Yapıldı, Giriş yapabilirsiniz")
        }).catch(function (err) {
          if (err.response) {
            setErr("Hata Oluştu!")
          }
        })
      } catch (err) {
        setErr("Hata Oluştu! ")
      }
      // setErr('Kayıt yapılıyor...')
      // await delay(1000);
      // setErr("Kayıdınız Yapıldı, Giriş yapabilirsiniz")
      // await delay(500);
      // nav('/login')
    }
  }
  const [type, setType] = useState('text');
  return (
    <div className='signup-component'>
      <div className="signup-title">
        <h1>Caravınn Hesabınızı Oluşturun</h1>
        <p>Hesabınız dakikalar içinde açın karavan kiralayın <br /> veya karavanınızı kiraya verin</p>
      </div>
      <div className="login-card">
        <span style={{ textAlign: 'center', marginBottom: '10px'}}>{errMessage && errMessage}</span>
        <input type="text" placeholder='Adınzı'
          name='name'
          onChange={handleChange}
        />
        <input type="text" placeholder='Eposta Adresiniz'
          name='email'
          onChange={handleChange}
        />
        <input type="text" placeholder='Telefon Numaranız'
          name='phone'
          onChange={handleChange}
        />
        <input type="password" placeholder='Şifreniz'
          name='password'
          onChange={handleChange}
        />
        {/* <label style={{ textAlign: 'center', marginBottom: '10px' }} htmlFor="">Doğum Tarihi</label> */}
        <input type={type}
          onFocus={() => setType('date')}
          onBlur={() => setType('text')}
          placeholder='Doğum Tarihi'
          style={{ padding: '15px', border: '1px solid #EFEFEF', borderRadius: '60px', marginBottom: '20px' }}
          name='dateofbirth'
          onChange={handleChange}
        />
        <button onClick={handleClick}>Kayıt Ol</button>
        <h4>Hesabınız varsa <NavLink to="/login">Giriş Yapın</NavLink></h4>

      </div>
    </div>
  )
}

export default SignupComponent