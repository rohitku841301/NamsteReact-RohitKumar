import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { ITEM_URL } from "../utils/constant";
import { CARD_IMG_URL } from "../utils/constant";
import MenuItem from "../component/MenuItem";

const RestroMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  let [resMenuInfo, setResMenuInfo] = useState(null);
  let [resMenuInfoCopy, setResMenuInfoCopy] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(ITEM_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
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
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    city,
    areaName,
    costForTwoMessage,
    avgRating,
    cuisines,
    cloudinaryImageId,
  } =
    resInfo?.data?.cards[0]?.card?.card?.info ||
    resInfo?.data?.cards[1]?.card?.card?.info;
  console.log(resMenuInfo.length);
  console.log(resInfo);

  return (
    <div>
      <div className="restaurentDetailContainer">
        <div>
          <h1 className="restaurentName">{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <h4>
            {areaName}, {city}
          </h4>
        </div>
        <h4 className="restaurentRating">
          <span>✯</span>
          {avgRating}
        </h4>
      </div>

      <div className="vegNon">
      <button onClick={()=>{
        setResMenuInfo(resMenuInfoCopy)
      }}>All</button>
        <button
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

      <div className="recomendedLength">
        <h2>Recomended({resMenuInfo.length})</h2>
      </div>

      {resMenuInfo.map((resMenu) => (
        <MenuItem key={resMenu.card.info.id} menuItem={resMenu} />
      ))}
    </div>
  );
};

export default RestroMenu;
