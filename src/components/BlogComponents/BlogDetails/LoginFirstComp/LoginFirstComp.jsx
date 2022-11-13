import React from 'react'
import './loginfirstcomp.css'
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom'
const LoginFirstComp = () => {
    return (
        <div className="login-signup-comp">
            <CgProfile style={{ marginRight: '10px', color: '#B4B4B4', fontSize: '2rem' }} />
            Yorum Yapmak için <Link id='link' to={'/sign-up'}>Kayıt Olun</Link> veya <Link id='link' to={'/login'}>Giriş Yapın</Link>
        </div>
    )
}

export default LoginFirstComp