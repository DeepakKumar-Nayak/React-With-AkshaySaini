import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imageUrl } from '../Utils/url'


function Cards() {
  const navigate = useNavigate()
  return (
    <div className='cards-res-gro'>

      <div className="card-one">
        <img onClick={() => navigate('/restaurants')} src={imageUrl + "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"} alt="" />

        <img src={imageUrl + "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"} alt="" />
      </div>


      <div className="card-two">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/25/63b2883d-8e92-4be5-a5f9-f642fbd20bac_Upto608.png" alt="" />

        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/24/b7fe3ac3-f137-4613-91a5-60ffac49860a_latenight4.png" alt="" />
      </div>
    </div>

  )
}

export default Cards
