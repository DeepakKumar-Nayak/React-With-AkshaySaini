import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'



// imageUrl : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/
// swiggy url : https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

function App() {

  return (
    <div className="main">
      <Header/>
      <Outlet/>
    </div>
  )

}


export default App;