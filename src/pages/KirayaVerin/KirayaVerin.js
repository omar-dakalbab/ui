import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'

import KirayaVerinComp from '../../components/KirayaVerinComponents/KirayaVerinComp/KirayaVerinComp'

const KirayaVerin = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <KirayaVerinComp />
            <Footer/>
        </div>
    )
}

export default KirayaVerin
