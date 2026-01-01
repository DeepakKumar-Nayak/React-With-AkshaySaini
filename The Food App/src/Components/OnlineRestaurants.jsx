import React from 'react'

function OnlineRestaurants({ data }) {
    const allCards = data?.data?.cards || []

    const findTitle = allCards.find((card) => {
        return card?.card?.card?.id?.toLowerCase().includes('popular_restaurants_title')
    })

    const findOnlineRestaurants = allCards.find((card)=>{
        return card?.card?.card?.id?.toLowerCase().includes('restaurant_grid_listing_v2')
    })
   
    const title = findTitle?.card?.card?.title
    const restaurants = findOnlineRestaurants?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   
   


    return (
        findOnlineRestaurants ? (
            <div className='online-restaurants-data'>
                <h4>{title}</h4>
                <div className="fetch-online-restaurant-cards">
                    {
                        restaurants?.map((cards)=>{
                            const { id, name, cloudinaryImageId, avgRating, areaName, sla } = cards.info
                            return(
                                <div className="online-res-cards" key = {id}>
                                     <img className='res-image'
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
                                        alt="image" />

                                    <p className='item-name'>{name}</p>
                                    <div className="rating-container">
                                        <p><i className="ri-star-fill"></i></p>
                                        <p className='rating'>{avgRating}</p>
                                        <p className='dlv-time'>{sla.slaString}</p>
                                    </div>
                                    <div className="cuisines-container">
                                        {
                                            cards.info.cuisines.map((cuisines) => (
                                                <p>{cuisines}</p>
                                            ))
                                        }
                                    </div>
                                    <p className='areaname'>{areaName}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        ) : null
       
    )
}

export default OnlineRestaurants
