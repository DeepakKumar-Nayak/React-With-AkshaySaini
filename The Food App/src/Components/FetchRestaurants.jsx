import React from 'react'
import TopResturants from './TopResturants'
import OnlineRestaurants from './OnlineRestaurants'

function FetchRestaurants({ data }) {
    return(
        <div className='fetch-all-restaurants-data'>
            <TopResturants data = {data}/>
            <OnlineRestaurants data = {data}/>
        </div>
    )
}

export default FetchRestaurants
