import React from 'react'
import { imageUrl } from '../Utils/url'


function Retaurants({resData}) {
  //console.log(resData)
  const {cloudinaryImageId, name, avgRating, cuisines, sla, areaName} = resData?.info
  return (
   
       <div className='res-cards'>
        <img src={imageUrl + cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <div className="rating-container">
          <p className='icon'><i class=" star-icon ri-star-s-fill"></i></p>
          <p>{avgRating}</p>
          <h3 className='time'>{sla.slaString}</h3>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
   
   
  )
}

export default Retaurants
