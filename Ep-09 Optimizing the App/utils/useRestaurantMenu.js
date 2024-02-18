import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

// Custom hook to fetch restaurant data based on resId
const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    const fetchData = async ()=>{

        const data = await fetch(RES_MENU_URL+resId);
        const json = await data.json();

        setResInfo(json.data);
    }

    useEffect(()=>{
        fetchData();
    }, []);


    return resInfo;
}

export default useRestaurantMenu;