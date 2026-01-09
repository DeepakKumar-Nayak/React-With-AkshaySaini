import React from 'react'
import { imageUrl } from '../Utils/url'



function Header() {
  return (
    <div className='landing-page-header'>
        <div className="left">
            <img src={imageUrl+"portal/static-assets/images/swiggy_logo_white.png"} alt="" />
        </div>
        <div className="right">
            <ul className='list-items'>
                <li>Swiggy Corporate</li>
                <li>Partner With us</li>
                <li>Get The App</li>
                <li>Sign In</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
