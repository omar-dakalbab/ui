import React from 'react'
import AboutHeader from '../../components/AboutUsComponents/AboutHeader/AboutHeader'
import AboutWrapper from '../../components/AboutUsComponents/AboutWrapper/AboutWrapper'
import InfoSection from '../../components/AboutUsComponents/InfoSection/InfoSection'
import InfoSection2 from '../../components/AboutUsComponents/InfoSection2/InfoSection2'
import OurTeam from '../../components/AboutUsComponents/OurTeam/OurTeam'
import OurValues from '../../components/AboutUsComponents/OurValues/OurValues'
import Navbar from '../../components/NavBar/Navbar'

const AboutUs = () => {
    return (
        <>
            <div className='signup-main'>
                <Navbar />
                <AboutHeader />
                <div className="wrapper-white" style={{ zIndex: 0, bottom: 0, top: 200, paddingTop: 0 }}>
                    <AboutWrapper />
                </div>

                <InfoSection />
                <InfoSection2 />
                <OurValues />
                <OurTeam />
            </div>
        </>
    )
}

export default AboutUs
