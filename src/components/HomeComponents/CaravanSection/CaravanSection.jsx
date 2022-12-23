import React, {useEffect} from 'react'
import './caravansection.css'
import LeftPLant from './assets/left-plants.svg'
import Cloud from './assets/clouds.svg'
import RightPlant from './assets/right-plants.svg'
import Caravan from './assets/caravan.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import PlayButton from './assets/play-button.svg'

const CaravanSection = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='main'>
            <div className="background">
                <img className='left-plant' src={LeftPLant} alt="left-plant" />
                <img className='cloud' src={Cloud} alt="cloud" />
                <img className='right-plant' src={RightPlant} alt="righ-plant" />
            </div>
            <div className="group">
                <div className="frontground">
                    <img className='caravan' data-aos-duration="1200" data-aos="fade-right" src={Caravan} alt="caravan" />
                </div>
                <div className="text">
                    <div data-aos-duration="1500" data-aos="fade-left" className="text-group">
                        <h1 id='title-1'>Karavan mı Lazım?</h1>
                        <h1 id='title-2'>Hemen caravınn'la<br /> Vınnla..</h1>
                        <p>Caravınn uygulamasını indir, avantajlı fiyatlarla dilediğin gün kadar
                            kirala/kiralat, kullandığın kadar öde. Caravınn Uygulaması
                            Appsotre ve Google Play’de!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CaravanSection
