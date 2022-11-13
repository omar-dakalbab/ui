import React, { useState } from 'react'
import urun from './urun.png'

const ekuruncard = () => {
    const [count, setCount] = useState(0);

    const handleSubtractOne = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleAddOne = () => {
        setCount(count + 1);
    }

    return (
        <div className="urun-card">
            <img src={urun} alt="" />
            <div className="urun-detay">
                <div className="urun-title">
                    <span id='title'>Mavi Su</span>
                    <span id='urun-price'>196,18 TL</span>
                </div>
                <hr />
                <span id='urun-desc'>
                    Aracın, kiralayan şahıs dışındaki kişi
                    ve / veya kişilerce kullanabilmesi
                    için ek maaliyet.
                </span>
                <hr />
                <div className="quantity">
                    <button id='white' onClick={handleAddOne}>+</button>
                    <span id='number'>{count}</span>
                    <button id='white' onClick={handleSubtractOne}>-</button>
                </div>
            </div>
        </div>
    )
}

export default ekuruncard
