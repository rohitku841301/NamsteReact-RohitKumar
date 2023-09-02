import FoodCard from "./FoodCard";
import * as myModule from "../utils/restroDataList";
import { useState } from "react";

const Body = () => {
  let [resList, setResList] = useState(myModule.restroDataList);
  
  return (
    <>
      <div className="bodyContainer">
        <button
          className="topRated"
          onClick={() => {
            resList = resList.filter((topRated) => topRated.info.avgRating > 4);
            setResList(resList)
          }}
        >
          Top Rated Restaurent
        </button>
       
        <div className="cardContainer">
          {resList.map((restaurant) => (
            <FoodCard key={restaurant.info.id} restroData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
