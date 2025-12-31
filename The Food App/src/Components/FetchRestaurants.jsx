import React from 'react'

function FetchRestaurants({ data }) {
    if (!data) {
        return (
            <div className="title-loader">
                {/* <h4>Deepak, Loading Data Please Wait</h4> */}
            </div>
        )
    }
    const title = data?.data?.cards[1]?.card?.card?.header?.title
    const categories = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return (
        <div className="fetch-restaurant-data">
            <h4>{title}</h4>

            <div className="fetch-restaurant-cards">

                {
                    categories.map((item)=>{
                        const {id, name, cloudinaryImageId, avgRating, areaName, sla} = item.info
                        return(
                            <div className="res-cards" key={id}>
                            <img className='res-image'
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
                                alt="" />

                            <p className='item-name'>{name}</p>
                            <div className="rating-container">
                                <p><i className="ri-star-fill"></i></p>
                                <p className='rating'>{avgRating}</p>
                                <p className='dlv-time'>{sla.slaString}</p>
                            </div>
                            <div className="cuisines-container">
                                {
                                    item.info.cuisines.map((item) => (
                                        <p>{item}</p>
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
    )
}

export default FetchRestaurants
