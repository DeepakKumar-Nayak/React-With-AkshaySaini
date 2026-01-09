import React from 'react'
import { imageUrl } from '../Utils/url'
import Header from './Header'
import Cards from './Cards'


function LandingPage() {
  return (
    <div className='landing-container'>
     <img className='image-one' src={imageUrl+"portal/testing/seo-home/Veggies_new.png"} alt="" />
     <img className='image-two' src={imageUrl+"portal/testing/seo-home/Sushi_replace.png"} alt="" />


     <div className="main-container">
      <Header/>
      <Cards/>
     </div>
    </div>
  )
}

export default LandingPage
