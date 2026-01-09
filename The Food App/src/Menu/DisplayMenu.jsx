import React, { useState } from 'react'
import { imageUrl } from '../Utils/url'

function DisplayMenu({ data }) {

    const [filterBtn, setFilterBtn] = useState('')

    const menucards = data.filter((card) => (
        card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'

    ))

    console.log(filterBtn)

    // const filterVeg = menucards.map((card) => {
    //     const filteredVegItems = card?.card?.card?.itemCards.filter((card) => {
    //         return card?.card?.info?.itemAttribute?.vegClassifier === "VEG"
    //     }) 
    //     return filteredVegItems
    // })

    // console.log(filterVeg)

    console.log(menucards)


    return (
        <div className='displayMenu'>
            <div className="filterbtns">
                <button className='veg' onClick={() => setFilterBtn('VEG')}>Veg</button>
                <button className='non-veggie' onClick={() => setFilterBtn('NONVEG')}>Non-Veg</button>
                <button className='all' onClick={() => setFilterBtn('ALL')}>Show All Items</button>
            </div>
            {
                menucards.map((card) => {
                    const itemCardsLength = card?.card?.card?.itemCards.length || 0
                    return (
                        <div className="display-menu-details" key={card?.card?.card?.categoryId}>
                            <p className='length'>{card?.card?.card?.title}({itemCardsLength})</p>
                            {
                                card?.card?.card?.itemCards.filter((item) => {
                                    if (filterBtn === "VEG") {
                                        return item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
                                    } else if (filterBtn === 'NONVEG') {
                                        return item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG";
                                    } else if (filterBtn === "ALL") {
                                        return true;
                                    }
                                    return true
                                }).map((data) => {
                                    // destructuring the data 
                                    const { id, name, defaultPrice, price, imageId, description, ratings, itemAttribute } = data?.card?.info || {}
                                    const { rating, ratingCountV2 } = ratings?.aggregatedRating || {}
                                    const { vegClassifier } = itemAttribute || {}

                                    return (
                                        <div className="menu-data" key={id}>

                                            <div className="left-data">
                                                <div className="veg-nonveg-logo">
                                                    {vegClassifier === "NONVEG" ? (
                                                        <div className="non-veg-logo">
                                                            <i class="ri-triangle-fill"></i>
                                                        </div>
                                                    ) : (
                                                        <div className="veg-logo">
                                                            <i class="ri-circle-fill"></i>
                                                        </div>
                                                    )

                                                    }
                                                </div>
                                                <p className='menu-name'>{name}</p>
                                                <p>₹{(defaultPrice || price) / 100}</p>
                                                {rating ? (
                                                    <div className="rating-container">
                                                        <p><i className=" star-icon ri-star-s-fill"></i></p>
                                                        <p className='rating'>{rating}</p>
                                                        <p>({ratingCountV2})</p>
                                                    </div>
                                                ) : null
                                                }
                                                <p>{description}</p>

                                            </div>
                                            <div className="right-data">
                                                {
                                                    data?.card?.info?.imageId ?
                                                    (<img src={imageUrl + imageId} alt="" />)
                                                    : (<div className="no-image"></div>)
                                                }


                                                <div className="button-container">
                                                    <button>Add</button>
                                                    <p>Customisable</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }

        </div>
    )
}

export default DisplayMenu
