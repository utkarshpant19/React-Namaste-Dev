import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../../Ep-05 Let's get Hooked/utils/constants";


const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  console.log(resId);


  useEffect(() => {
    fetchMenu(); // API will only be called on initial page render
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RES_MENU_URL+resId
      );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };



if(resInfo == null){
    return <Shimmer/>
}

const {name, cuisines, avgRating} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="resMenu">
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} Stars</h3>

      <h2>Menu</h2>
      <ul>
        {
        itemCards.map((item)=> (
            <li key={item.card.info.id}>{item.card.info.name}   Rs-{item.card?.info?.price/100 || item.card.info.defaultPrice/100}</li>
        ))    
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
