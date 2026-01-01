import React from 'react'

function TopResturants({data}) {
    const allCards = data?.data?.cards || []
    console.log(allCards)

    const topBrands = allCards.find(
        card => card?.card?.card?.id?.toLowerCase().includes('top_brands')

    )



    const title = topBrands?.card?.card?.header?.title
    const categories = topBrands?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return (

        topBrands ? (
            <div className="top-restaurant-data">
                <h4>{title}</h4>
                <div className="fetch-restaurant-cards">

                    {
                        categories?.map((item) => {
                            const { id, name, cloudinaryImageId, avgRating, areaName, sla } = item.info
                            return (
                                <div className="res-cards" key={id}>
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
                                            item.info.cuisines.map((cuisines) => (
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
            </div>) 
        : null

    )
}

export default TopResturants
