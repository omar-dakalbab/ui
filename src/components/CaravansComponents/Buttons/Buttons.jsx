import React, {useState} from 'react'
import './buttons.css'
import Button from '../../Button/Button'
const Buttons = () => {
    const [buttonColors, setButtonColors] = useState({
        color1: "btn btn-blue",
        color2: "btn btn-transparent-blue",
        color3: "btn btn-transparent-blue",
    });
    return (
        <div className="caravans-buttons">
            <button
                onClick={() => {
                    setButtonColors({
                        color1: "btn btn-blue",
                        color2: "btn btn-transparent-blue",
                        color3: "btn btn-transparent-blue"
                    })
                }}
                className={buttonColors.color1}>
                Tümü
            </button>
            <button
                onClick={() => {
                    setButtonColors({
                        color2: "btn btn-blue",
                        color1: "btn btn-transparent-blue",
                        color3: "btn btn-transparent-blue"
                    })
                }}
                className={buttonColors.color2}>
                Moto Karavan
            </button>
            <button
                onClick={() => {
                    setButtonColors({
                        color3: "btn btn-blue",
                        color2: "btn btn-transparent-blue",
                        color1: "btn btn-transparent-blue"
                    })
                }}
                className={buttonColors.color3}>
                Çekme Karavan
            </button>
        </div>
    )
}

export default Buttons