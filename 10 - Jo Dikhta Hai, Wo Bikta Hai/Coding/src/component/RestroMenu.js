import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { CARD_IMG_URL } from "../utils/constant";
import MenuItem from "../component/MenuItem";
import { ITEM_URL } from "../utils/constant";


const RestroMenu = () => {
  const { resId } = useParams();

  const [resInfo, all] = useRestaurentMenu(resId);

  let [resMenuInfo, setResMenuInfo] = useState(null);
  let [resMenuInfoCopy, setResMenuInfoCopy] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(ITEM_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    setResMenuInfo(
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
    );
    setResMenuInfoCopy(
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
    );
  }


  if (resInfo === null || resMenuInfo===null) return <Shimmer />;

  const { name, city, areaName, avgRating, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info ||
    resInfo?.data?.cards[1]?.card?.card?.info;

  return (
    <div className="bg-custom-color">
    <div className="flex justify-center ">
      <div className="text-white w-3/5 mt-32 flex justify-between">
        <div>
          <h1 className="text-6xl">{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <h4>
            {areaName}, {city}
          </h4>
        </div>
        <h4 className="text-4xl">
          <span>✯</span>
          {avgRating}
        </h4>
      </div>
      </div>

      <div className="w-full flex justify-center my-8">
      <div className="w-3/5">
        <button
        className="w-15 px-4 py-1 m-2 bg-yellow-400"
          onClick={() => {
            setResMenuInfo(resMenuInfoCopy);
          }}
        >
          All
        </button>
        <button
        className="w-15 px-4 py-1 m-2 bg-yellow-400"
          onClick={() => {
            let vegMenuInfo = resMenuInfoCopy.filter(
              (vegMenu) =>
                vegMenu.card.info.itemAttribute.vegClassifier === "VEG"
            );
            setResMenuInfo(vegMenuInfo);
          }}
        >
          Veg
        </button>
        <button
        className="w-15 px-4 py-1 m-2 bg-yellow-400"
          onClick={() => {
            let nonvegMenuInfo = resMenuInfoCopy.filter(
              (vegMenu) =>
                vegMenu.card.info.itemAttribute.vegClassifier === "NONVEG"
            );
            setResMenuInfo(nonvegMenuInfo);
          }}
        >
          Non-Veg
        </button>
        </div>
      </div>

     <div className="text-white flex justify-center">
        <h2 className="w-3/5 text-xl">Recomended({resMenuInfo.length})</h2>
      </div>  
      <div className="flex justify-center items-center flex-col ">
      {resMenuInfo.map((resMenu) => (
        <MenuItem key={resMenu.card.info.id} menuItem={resMenu} />
      ))}
      </div>
    </div>
  );
};

export default RestroMenu;
