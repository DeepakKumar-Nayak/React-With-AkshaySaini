import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'
import Shimmer from './Shimmer Components/Shimmer'
import FilterShimmer from './Shimmer Components/FilterShimmer'
import { swiggyUrl } from '../Utils/url'



function Body() {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredResturants, setFilteredRestaurants] = useState([])

    const fetchData = async () => {
        try {
            const data = await fetch(swiggyUrl)
            if (!data.ok) {
                throw new Error("Phat gaya! Network response was not ok");
            }

            const json = await data.json()
            console.log(json, 'iam from body')

            const allCards = json?.data?.cards || json?.data?.success?.cards || []
            console.log(allCards, 'iam from object')

            const getRestaurantCard = allCards.find((card) => {
                return card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            })


            setListOfRestaurants(getRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
            setFilteredRestaurants(getRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

        } catch (error) {
            console.log('Error Fetching Data', error.message)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='body'>
            <div className="filter-section">
                <div className="search-section">
                    <input type="text" className="search-input" placeholder='Enter Your Restaurant Name' 
                    onChange={(e)=>{
                        const getHotel = listOfRestaurants.filter((card)=>(
                            card?.info?.name?.toLowerCase().includes(e.target.value)
                        ))
                        setFilteredRestaurants(getHotel)
                    }}
                    />
                </div>
                <div className="filter">
                <button onClick={() => {
                    const filterData = listOfRestaurants.filter((card) => (
                        card?.info?.avgRating > 5
                    ))
                    setFilteredRestaurants(filterData)

                }}>Top Rated Restaurants</button>

                <button onClick={() => setFilteredRestaurants(listOfRestaurants)}>
                    Show All Restaurants
                </button>
            </div>
            </div>
            {
                listOfRestaurants?.length === 0 ? (<Shimmer />) :
                    filteredResturants?.length === 0 ? (<FilterShimmer/>) :
                        (
                            <div className="restaurant-cards">
                                {
                                    filteredResturants.map((card) => (
                                        <Restaurants key={card.info.id} resData={card} />
                                    ))
                                }
                            </div>
                        )
            }

        </div>
    )
}

export default Body


