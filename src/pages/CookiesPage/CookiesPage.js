import React, {useEffect} from 'react'
import Navbar from '../../components/NavBar/NavbarWhite'

const CookiesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div >
            <Navbar />
            <div className="cookie-page-content" style={{ textAlign: 'center', padding: '20%', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", height: '70vh' }}>
                <h1 style={{ marginBottom: 25 }}>Çerez Politikası</h1>
                <p>Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır.
                    Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın
                    sabit diskinde sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır. Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri
                    içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan oluşan küçük
                    bir dosyadır. Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya
                    bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır. Çerezler, bilgisayarınızın sabit diskine
                    aktarılan bilgileri içerir. Çerez, kabul etmeniz halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız harf ve
                    rakamlardan oluşan küçük bir dosyadır. Çerezler, bilgisayarınızın sabit diskine aktarılan bilgileri içerir. Çerez, kabul etmeniz
                    halinde tarayıcınızda veya bilgisayarınızın sabit diskinde sakladığımız harf ve rakamlardan oluşan küçük bir dosyadır. Çerezler
                    , bilgisayarınızın sabit diskine aktarılan bilgileri içerir.

                </p>
            </div>
        </div>
    )
}

export default CookiesPage
