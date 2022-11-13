import React, {useEffect} from 'react'
import Navbar from '../../components/NavBar/NavbarWhite'
import Footer from '../../components/Footer/Footer'
import Caravan from '../../components/CaravansComponents/CaravanDetails/Caravan/Caravan'
import Suggestions from '../../components/CaravansComponents/CaravanDetails/Suggestions/Suggestions'
const CaravanDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <Caravan />
            <Suggestions/>
        </div>
    )
}

export default CaravanDetails
