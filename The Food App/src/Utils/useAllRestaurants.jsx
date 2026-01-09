import { useEffect, useState } from "react";
import { swiggyUrl } from "./url";

export const useAllRestaurants = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        try{
            const data = await fetch(swiggyUrl)
            if (!data.ok) {
                throw new Error("Phat gaya! Network response was not ok");
            }
            const json = await data.json()
            console.log(json, 'iam from body')

            const allCards = json?.data?.cards || json?.data?.success?.cards || []
            //console.log(allCards, 'iam customhook)

            const getRestaurantCard = allCards.find((card) => {
                return card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            })
            const resData = getRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []

            setListOfRestaurants(resData)
            setFilteredRestaurants(resData)

        }catch(error){
            console.log('Error Fetching Data',error.message)
        }
    }
    return {listOfRestaurants,filteredRestaurants,setFilteredRestaurants}
}
