
import RestaurantCard from "../Components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// Not using key in Map <<<<<<<<<<<<<<<< Using Index as key <<<<<<<<<<<< Using Id as key
// const Body = () => {

//     const [listOfRestaurants, setListOfRestaurants] = useState([]);;

//     useEffect(()=>{
//         fetchData();
//     }, []);
//     console.log('Body Rendered');

//     const fetchData = async ()=>{

//        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.159014&lng=72.9985686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//        const json = await data.json();
//        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     }

//   return (
//     <div className="body">
//       <div className="search-container">
//         <div className="filter">
//           <button
//             className="filter-btn"
//             onClick={() => {
//               const filtered = listOfRestaurants.filter((res) => {
//                 return res.info.avgRating > 4.5;
//               });

//               setListOfRestaurants(filtered);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//       </div>
//       <div className="res-container">
//         {listOfRestaurants.map((restaurant, index) => (
//           <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
//         ))}
//         {/* <RestaurantCard resData={resList[0]}/>
//             <RestaurantCard resData={resList[1]}/>
//             <RestaurantCard resData={resList[2]}/>
//             <RestaurantCard resData={resList[3]}/> */}
//       </div>
//     </div>
//   );
// };

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    console.log('Body Rendered');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const apiData = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.159014&lng=72.9985686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await apiData.json();

        console.log(jsonData);
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    // Conditional Rendering
    return listOfRestaurants.length === 0 ?
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
                        filterdRestaurants.map((res, index) => (
                            <RestaurantCard resData={res} key={res.info.id} />
                        ))
                    }
                </div>
            </div>
        )
}

export default Body;
