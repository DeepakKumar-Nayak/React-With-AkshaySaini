import { useEffect, useState } from "react"
import HeaderData from "./HeaderData"
import FetchRestaurants from "./FetchRestaurants"

function FetchData() {
  const [data, setData] = useState()

  async function fetchData() {
    try {

      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

      const jsondata = await response.json()
      setData(jsondata)

    } catch (error) {
      console.log('data not available', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className='fetch-data'>
      <HeaderData data={data} />
      <FetchRestaurants data= {data}/>
    </div>
  )
}

export default FetchData
