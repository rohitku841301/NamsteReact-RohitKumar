import FoodCard, { withPromotedRestaurent } from "./FoodCard";
import { restroDataList } from "../utils/restroDataList";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import banner from "../../banner1.png";

const Body = () => {
  let [resList, setResList] = useState(null);
  let [searchRestro, setSearchRestro] = useState([]);
  let [topRatedRestro, setTopRatedRestro] = useState([]);

  let [filterRestaurent, setFilterRestaurent] = useState(null);

  let [search, setSearch] = useState("");

  const PromotedFoodCard = withPromotedRestaurent(FoodCard);

  useEffect(() => {
    fetchRestro();
  }, []);

  const fetchRestro = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.4736843&lng=77.1068059&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    const JSON = json?.data?.success?.cards.filter(
      async(jsonData) => await jsonData?.gridWidget?.gridElements?.infoWithStyle?.restaurants !== undefined
    );
    console.log(JSON)
    // 

    setFilterRestaurent(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResList(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Internet is offline</h1>;

  if (filterRestaurent === null) return <Shimmer />;

  // console.log(filterRestaurent);

  return (
    <>
      <div className="h-full w-full relative z-10">
        <img className="h-full w-full" src={banner} alt="" />
        <div class="absolute top-1/4 text-center bg-opacity-50 p-4 text-white w-full">
          <h1 className="text-8xl font-serif">BoldBites</h1>
          <h2 className="text-2xl">Satisfy Your Cravings</h2>
        </div>
        <div className="flex absolute bottom-10 justify-center w-full">
          <button
            className="p-2 bg-yellow-400 text-black-200 rounded-l mx-4 font-serif"
            onClick={() => {
              let topRated = resList.filter(
                (topRated) => topRated.info.avgRating > 4
              );
              setFilterRestaurent(topRated);
            }}
          >
            Top Rated Restaurent
          </button>
          <div className="">
            <input
              className="px-5 py-3 w-96 border-spacing-0 border-slate-600"
              type="text"
              placeholder="Search by Restaurant name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="px-5 py-3 bg-yellow-400 text-black-800"
              onClick={() => {
                let restro = resList.filter((res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilterRestaurent(restro);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center bg-custom-color py-8">
        {filterRestaurent.map((restaurant) => (
          <Link
            to={"/restaurents/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedFoodCard restroData={restaurant} />
            ) : (
              <FoodCard restroData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
