import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Body from './Components/FetchData'
import HeaderData from './Components/FetchData'
import FetchData from './Components/FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Header/>
      <FetchData/>
    </div>
  )

}

export default App
