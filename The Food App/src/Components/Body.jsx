import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'
import Shimmer from './Shimmer'
import { use } from 'react'

import { swiggyUrl } from '../Utils/url'


function Body() {

    const [listOfRestaurants, setListOfRestaurants] = useState([])

    const fetchData = async ()=>{
        try {
            const data = await fetch(swiggyUrl)
            if (!data.ok) {
                throw new Error("Phat gaya! Network response was not ok");
              }
            
            const json = await data.json()
            console.log(json,'iam from body')

            const allCards = json?.data?.cards || json?.data?.success?.cards || []
            // console.log(allCards)
            
            const getRestaurantCard = allCards.find((card)=>{
                return card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            })

            setListOfRestaurants(getRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
            
        }catch(error){
            console.log('Error Fetching Data', error.message)
        }
       
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='body'>
        {
            listOfRestaurants?.length === 0 ?(
                <Shimmer/>
            ) : (
                <div className="restaurant-cards">
                    {
                          listOfRestaurants.map((card)=>(
                           <Restaurants key = {card.info.id} resData= {card}/>
                        ))
                    }
                </div>
                
            )
        }
       
    </div>
  )
}

export default Body
