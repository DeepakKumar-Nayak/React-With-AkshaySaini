import React from 'react'

function Shimmer() {
  return (
    <div className='shimmer-container'>
      <div className="top-part">
        <h3>Looking For Great Food Near You .... </h3>
      </div>
      <div className="bottom-part">
        <div className="cards">
            <div className="box"></div>
            <h1></h1>
            <h2></h2>
        </div>
        <div className="cards">
           <div className="box"></div>
            <h1></h1>
            <h2></h2>
        </div>
        <div className="cards desktop-only">
            <div className="box"></div>
            <h1></h1>
            <h2></h2>
        </div>
        <div className="cards desktop-only">
            <div className="box"></div>
            <h1></h1>
            <h2></h2>
        </div>
        <div className="cards desktop-only">
          <div className="box"></div>
            <h1></h1>
            <h2></h2>
        </div>
      </div>

    </div>
  )
}

export default Shimmer
