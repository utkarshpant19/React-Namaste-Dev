
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Not using key in Map <<<<<<<<<<<<<<<< Using Index as key <<<<<<<<<<<< Using Id as key

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();

    console.log('Body Rendered');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const apiData = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.159014&lng=72.9985686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await apiData.json();

        console.log(jsonData);
        setListOfRestaurants(jsonData?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterdRestaurants(jsonData?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(!onlineStatus){
        return <h2>Oops! Looks like you're offline</h2>;
    }
    // Conditional Rendering
    return listOfRestaurants?.length === 0 ?
        <Shimmer /> :
        (
            <div className="body">
                <div className="search-container">
                    <div className="filter">
                        <div className="search-container">
                            {/* Event Binding follwed by Property Binding */}
                            <input type="text" value={searchText} onChange={(e)=>{
                                setSearchText(e.target.value);
                            }}></input>
                            <button onClick={()=>{
                                console.log(searchText);
                               const filtered = listOfRestaurants.filter((res)=> res.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                               setFilterdRestaurants(filtered);
                            }}>Search</button>
                        </div>
                        <button className="filter-btn" onClick={() => {
                            const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                            setListOfRestaurants(filtered);
                        }}>Top Rated Restaurant</button>
                    </div>
                </div>
                <div className="res-container">
                    {
                        filterdRestaurants?.map((res, index) => (
                            <Link key={res.info.id} to={"/restaurant/"+res.info.id}><RestaurantCard resData={res} /></Link> 
                        ))
                    }
                </div>
            </div>
        )
}

export default Body;
