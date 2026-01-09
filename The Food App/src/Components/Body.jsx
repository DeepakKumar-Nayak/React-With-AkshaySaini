import Restaurants from './Restaurants'
import Shimmer from './Shimmer Components/Shimmer'
import FilterShimmer from './Shimmer Components/FilterShimmer'
import { Link } from 'react-router-dom'
import { useAllRestaurants } from '../Utils/useAllRestaurants'
import { useOnlineStatus } from '../Utils/UseOnlineStatus'




function Body() {

    // created a custom hook just to keep it clean otherwise it will look messy
    const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } = useAllRestaurants()

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false){
        return(
            <h1 className='status'>Look like you are offline please check your internet connection</h1>
        )
    }


    return (
        <div className='body'>
            <div className="filter-section">
                <div className="search-section">
                    <input type="text" className="search-input" placeholder='Enter Your Restaurant Name'
                        onChange={(e) => {
                            const getHotel = listOfRestaurants.filter((card) => (
                                card?.info?.name?.toLowerCase().includes(e.target.value)
                            ))
                            setFilteredRestaurants(getHotel)
                        }}
                    />
                </div>
                <div className="filter">
                    <button onClick={() => {
                        const filterData = listOfRestaurants.filter((card) => (
                            card?.info?.avgRating > 4.5
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
                    filteredRestaurants?.length === 0 ? (<FilterShimmer />) :
                        (
                            <div className="restaurant-cards">
                                {
                                    filteredRestaurants.map((card) => (
                                        <Link
                                            key={card.info.id}
                                            to={`/restaurant/${card.info.id}`}>
                                            <Restaurants resData={card} />
                                        </Link>
                                    ))
                                }
                            </div>
                        )
            }
        </div>
    )
}

export default Body


