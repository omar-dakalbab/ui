import React, { useEffect, useState } from 'react'
import Header from '../../components/CaravansComponents/Header/Header'
import Navbar from '../../components/NavBar/NavbarWhite'

import CaravansCard from '../../components/CaravansComponents/CaravansCard/CaravansCard'
import { useParams } from 'react-router-dom'
const Caravans = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let location = useParams();
  const [buttonColors, setButtonColors] = useState({
    color1: "btn btn-blue",
    color2: "btn btn-transparent-blue",
    color3: "btn btn-transparent-blue",
  });
  const [statusFilter, setStatusFilter] = useState('all');
  return (
    <div>
      <Navbar />
      <Header />
      <div className="wrapper-white" style={{ bottom: 120, padding: '75px 10%' }}>
        <div className="caravans-buttons" style={{marginBottom: '25px'}}>
          <button
            onClick={() => {
              setButtonColors({
                color1: "btn btn-blue",
                color2: "btn btn-transparent-blue",
                color3: "btn btn-transparent-blue"
              })
              setStatusFilter('all')
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
              setStatusFilter('moto')
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
              setStatusFilter('cekme')
            }}
            className={buttonColors.color3}>
            Çekme Karavan
          </button>
        </div>
        <CaravansCard limit="24" request={statusFilter} />
      </div>
    </div>
  )
}

export default Caravans