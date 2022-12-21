import React from 'react'
import CaravansCard from '../../CaravansCard/CaravansCard'
import { Link } from 'react-router-dom';
const Suggestions = () => {

    const limit = 4;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: '#196CA5', marginBottom: 35}}>Benzer İlanlar</h1>
            <div className="cards-caravan" style={{ display: 'flex', padding: '0 10%', marginBottom: 65 }}>
                <CaravansCard limit={limit} request="all"/>
            </div>
            
            <Link to={'/kiralik-karavanlar'}><button style={{
                padding: '10px 40px',
                borderRadius: 30,
                border: '1px solid #196CA5',
                color: '#196CA5',
                fontWeight: 500,
                background: 'transparent'
            }}>Tümünü Gör</button></Link>
        </div>
    )
}

export default Suggestions
