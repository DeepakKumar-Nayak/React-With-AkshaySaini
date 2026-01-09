import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imageUrl, menuURL } from '../Utils/url';
import Shimmer from '../Components/Shimmer Components/Shimmer';
import DisplayMenu from './DisplayMenu';


function RestaurantMenu() {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null)
  const [resName, setResName] = useState('')
  const [resinfodata, setResinfoData] = useState(null)
  const [toppickTitle, setTopPickTitle] = useState('')
  const [toppickItems, setTopPickItems] = useState(null)
  const [allmenuCards, setallMenuCards] = useState([])

  useEffect(() => {
    fetchMenu();
  }, [])


  const fetchMenu = async () => { 
    const data = await fetch(
      `${menuURL}${resId}`
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

    const findGroupCard = allCards.find((card)=>(
      card?.groupedCard 
    ))

    const menuCards = findGroupCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
    //console.log(menuCards)

    const TopPickCard = menuCards.find((card)=>(
      card?.card?.card?.title === "Top Picks"
    ))
    const TopCarouselData = TopPickCard?.card?.card?.carousel
    console.log(TopCarouselData, 'top top')
  

    setResInfo(response)
    setResName(findTextCard?.card?.card?.text || '')
    setResinfoData(findResInfoCard?.card?.card?.info || [])
    setTopPickTitle(TopPickCard?.card?.card?.title || '')
    setTopPickItems(TopCarouselData || null)
    setallMenuCards(menuCards)


  }

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
            {/* code for restaurant info */}
            <div className="res-info-card">

              <div className="rating-container">
                <h4 className='icon'><i className=" star-icon ri-star-s-fill"></i></h4>
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
            </div>
            
            {/* code for topPicks */}
            {toppickItems? (
              <div className="top-items-container">
                <hr></hr>
              <h2 className='top-title'>{toppickTitle}</h2>
              <div className="carousel-data">
               {
                toppickItems.map((card)=>(
                  <div className="image-container" key = {card.bannerId}>
                   
                    <img src={imageUrl + card.creativeId} alt= {card.title}/>
                    
                  </div>
                ))
               }
              </div>
              </div>
            ) : null}


            <DisplayMenu data = {allmenuCards}/>
          </div>
          

        )
      }
    </div>
  )
}

export default RestaurantMenu
