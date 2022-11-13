import React from 'react'
import './blogcardheader.css'
import overlay from './overlay.svg'
import bg from './bg-card.png'
import circle from './circle.svg'

const BlogCardHeader = () => {
    return (
        <div className='blog-main-page-card-header'>
            <div className="blog-card-header" style={{ backgroundImage: `url(${bg})` }}>
                <img width='100%' src={overlay} alt="overlay" style={{ marginTop: '8px' }} />
                <div className="circles">
                    <img src={circle} alt="cir" className='circle active' />
                    <img src={circle} alt="cir" className='circle' />
                    <img src={circle} alt="cir" className='circle' />
                    <img src={circle} alt="cir" className='circle' />
                    <img src={circle} alt="cir" className='circle' />
                </div>
                <h3>Araç Paylaşım Uygulamaları Toplu Taşımaya Kıyasla Nasıl
                    Avantajlar Sağlıyor? </h3>
            </div>
        </div>
    )
}

export default BlogCardHeader