import React, { useState } from 'react'

function DisplayMenu({ data }) {

    const menucards = data.filter((card) => (
        card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'

    ))
    console.log(menucards)




    return (
        <div className='displayMenu'>
            {
                menucards.map((card) => {
                    const itemCardsLength = card?.card?.card?.itemCards.length || 0
                    return (
                        <div className="display-menu-details" key={card?.card?.card?.categoryId}>
                            <p>{card?.card?.card?.title}({itemCardsLength})</p>
                            {
                                card?.card?.card?.itemCards.map((data)=>{
                                    return (
                                        <div className="menu-data">
                                            <div className="left-data">
                                                <p className='menu-name'>{data?.card?.info?.name}</p>
                                            </div>
                                            <div className="right-data"></div>
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
