import React from 'react'

function HeaderData({data}) {
  if(!data){
    return(
        <div className="title-loader">
            <h4>Deepak, Loading Data Please Wait</h4>
        </div>
    )
  }
  const title = data?.data?.cards[0]?.card?.card?.header?.title
  const categories = data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  return(
    <div className="header-data">
        <h4>Deepak {title}</h4>
        <div className="all-cards">
            {
                categories.map((item)=>(
                    <div className="card" key={item.id}>
                        <img className='header-image' 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.imageId} 
                            alt="{item.action?.text}" 
                        />
                    </div>
                ))
            }
        </div>
        <hr></hr>
    </div>
  )
}

export default HeaderData
