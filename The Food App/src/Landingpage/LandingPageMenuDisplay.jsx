import React from 'react'
import { GROCERY_LIST, imageUrl, menu_data } from '../Utils/url'




function LandingPageMenuDisplay() {

  return (
    <div className='display-landing-menu'>
        <div className="top">
            <h1 className='menu-heading'>0rder Our Best Food Options</h1>
            <div className="menu-cards">
                {
                    menu_data.map((item)=>{
                        return(
                            <div className="cards" key={item.id}>
                                <img src={imageUrl+item.imageId} alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <div className="bottom">
            <h1 className='grocery-heading'>Shop groceries on Instamart</h1>
            <div className="grocery-cards">
                {
                    GROCERY_LIST.map((item)=>{
                        return(
                            <div className="cards" key={item.id}>
                                <img src={imageUrl+item.imageId} alt="" />
                                <div className="heading">
                                    <h3 className='grocery-item-name'>{item.name}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
      
    </div>
  )
}

export default LandingPageMenuDisplay
