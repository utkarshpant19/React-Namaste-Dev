const RestaurantCard = (props)=>{

    const {resData} = props
    const {name,avgRating, cuisines, cloudinaryImageId} = resData.info;
    return (

        <div className="res-card">
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} alt="Restaurant Name"></img>
            <h2>{name}</h2>
            <span>{avgRating}</span><br></br>
            <span>{cuisines?.join(', ')}</span>
        </div>
    )
}

export default RestaurantCard