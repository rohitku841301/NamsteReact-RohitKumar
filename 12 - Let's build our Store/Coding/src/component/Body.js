import FoodCard, { withPromotedRestaurent } from "./FoodCard";
import { restroDataList } from "../utils/restroDataList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import banner from "../../banner1.png";
import { RESTAURENT_API } from "../utils/constant";
import Banner from "./Banner"

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
    const data = await fetch(RESTAURENT_API);
    const json = await data.json();
    const JSON = json?.data?.cards.filter(
      (restro) =>
        restro?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
        undefined
    );
    setFilterRestaurent(
      JSON[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResList(JSON[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Internet is offline</h1>;

  return (
    <>
      <div className="h-full w-full relative z-10">
        <Banner />
        <div className="flex absolute bottom-5 justify-center w-full lg:bottom-10">
          <button
            className="px-2 bg-yellow-400 text-black font-semibold rounded-lg mx-2 font-custom text-lg sm:px-4 xs:mx-4"
            onClick={() => {
              let topRated = resList.filter(
                (topRated) => topRated.info.avgRating > 4
              );
              setFilterRestaurent(topRated);
            }}
          >
            Popular
          </button>
          <div className="">
            <input
              className="px-2 py-[6px] w-48 border-spacing-0 border-slate-600 lg:w-96 lg:py-3 sm:w-72 sm:py-[10px] xs:px-5 xs:w-60 xs:py-[8px]"
              type="text"
              placeholder="Search by Restaurant name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="px-2 py-[6px] bg-yellow-400 text-black-800 lg:py-3 sm:py-[10px] sm:px-5 xs:py-[8px]"
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
      {filterRestaurent === null ? (
        <Shimmer />
      ) : (
        <div className="w-full flex justify-center flex-wrap bg-custom-color py-8">
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
      )}
    </>
  );
};

export default Body;
