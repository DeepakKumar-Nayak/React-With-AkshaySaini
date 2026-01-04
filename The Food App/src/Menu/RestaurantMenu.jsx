import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imageUrl } from '../Utils/url';
import Shimmer from '../Components/Shimmer Components/Shimmer';


function RestaurantMenu() {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null)
  const [resName, setResName] = useState('')
  const [resinfodata, setResinfoData] = useState()

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2832738&lng=77.465927&restaurantId=${resId}&submitAction=ENTER`
    );
    const response = await data.json()
    console.log(response)

    const allCards = response?.data.cards || []
    console.log(allCards)

    // find the card width text dynamic
    const findTextCard = allCards.find((card) => (
      card?.card?.card?.text
    ))

    // get resturant card info dynamic search
    const findResInfoCard = allCards.find((card) => (
      card?.card?.card?.info
    ))




    console.log(findResInfoCard)

    setResInfo(response)
    setResName(findTextCard?.card?.card?.text)
    setResinfoData(findResInfoCard?.card?.card?.info)


  }
  useEffect(() => {
    fetchMenu();
  }, [])

  return (
    <div className='res-info'>
      {
        resInfo === null ? (<Shimmer />) : (
          <div className="res-info-container">
            <h2 className='res-name'>{resName}</h2>
            <div className="dine-out">
              <h5>Order Online</h5>
              <h5>DineOut</h5>
            </div>
            <div className="res-info-card">

              <div className="rating-container">
                <p className='icon'><i className=" star-icon ri-star-s-fill"></i></p>
                <h4>{resinfodata.avgRating}</h4>
                <h4>({resinfodata.totalRatingsString})</h4>
                <h4>{resinfodata.costForTwoMessage}</h4>
              </div>

              <h5>{resinfodata.cuisines.join(", ")}</h5>
              <div className="delivery-time-container">
                <div className="outlet-info">
                  <h5 className="outlet-label">Outlet <span className="location">{resinfodata.areaName}</span></h5>
                  <h5 className="delivery-duration">{resinfodata.sla.slaString}</h5>
                </div>
              </div>
              <hr></hr>
              <div className="image-container">
                <img src= {`${imageUrl}v1634558776/swiggy_one/OneLogo_3x.png`} alt="free" />
                <p>Free delivery on orders above ₹199</p>
              </div>
            </div>
          </div>


        )
      }
    </div>
  )
}

export default RestaurantMenu
