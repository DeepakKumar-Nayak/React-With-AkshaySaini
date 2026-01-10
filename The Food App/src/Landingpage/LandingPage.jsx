import React from 'react'
import { imageUrl } from '../Utils/url'
import Header from './Header'
import Cards from './Cards'
import LandingPageMenuDisplay from './LandingPageMenuDisplay'
import Footer from './Footer'



function LandingPage() {
  return (
    <>
      <div className='landing-container'>
        <img className='image-one' src={imageUrl + "portal/testing/seo-home/Veggies_new.png"} alt="" />
        <img className='image-two' src={imageUrl + "portal/testing/seo-home/Sushi_replace.png"} alt="" />


        <div className="main-container">
          <Header />
          <Cards />
        </div>

      </div>
      <div className="menu">
        <LandingPageMenuDisplay />
      </div>
      <div className="banner-pay-container">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
      </div>

      <Footer/>
    </>
  )
}

export default LandingPage
