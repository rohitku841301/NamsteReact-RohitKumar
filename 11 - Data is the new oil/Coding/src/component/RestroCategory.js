import { useState } from "react";
import MenuItem from "./MenuItem";

const RestroCategory = ({category,showItem,setShowIndex}) => {
    // console.log(category);
  const { title, itemCards } = category?.card?.card;
  
  return (
    <>
      <div className="w-3/5  bg-custom-menu m-5 p-5 rounded-xl text-white font-bold">
        <div className="flex justify-between cursor-pointer" onClick={()=>(
            setShowIndex()
            
            )}>
          <h1 className="px-5 ">{title} ({itemCards.length})</h1>
          <h2>▼</h2>
        </div>
        {itemCards.map((items) => (
            showItem && <MenuItem key={items.card.info.id} item={items} /> 
        ))}
      </div>
    </>
  );
};

export default RestroCategory;
