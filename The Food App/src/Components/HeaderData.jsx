import React from 'react'

function HeaderData({ data }) {

    const headerData = data?.data?.cards?.find(
        (x)=> x?.card?.card?.header?.title === "What's on your mind?"
    )

    const title = headerData?.card?.card?.header?.title
    const categories = headerData?.card?.card?.gridElements?.infoWithStyle?.info;

    if(!data && !categories) return null;

    return (
        <div className="header-data">
            <h4>Deepak {title}</h4>
            <div className="all-cards">
                {
                    categories?.map((item) => (
                        <div className="card" key={item.id}>
                            <img className='header-image'
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.imageId}
                                alt={item.action?.text}
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
