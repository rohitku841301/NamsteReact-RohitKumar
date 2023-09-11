import FoodCard from "./FoodCard";
import { restroDataList } from "../utils/restroDataList";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";

const Body = () => {
  let [resList, setResList] = useState(null);
  let [searchRestro, setSearchRestro] = useState([]);
  let [topRatedRestro, setTopRatedRestro] = useState([]);

  let [filterRestaurent, setFilterRestaurent] = useState(null);

  let [search, setSearch] = useState("");

  useEffect(() => {
    fetchRestro();
  }, []);

  const fetchRestro = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.4736843&lng=77.1068059&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json();
    console.log(json);
    setFilterRestaurent(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResList(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (filterRestaurent === null) return <Shimmer />;

  console.log(filterRestaurent);

  return (
    <>
      <div className="bodyContainer">
        <div className="topRatedRestau">
          <button
            className="topRated"
            onClick={() => {
              let topRated = resList.filter(
                (topRated) => topRated.info.avgRating > 4
              );
              setFilterRestaurent(topRated);
            }}
          >
            Top Rated Restaurent
          </button>
          <div className="searchField">
            <input
              type="text"
              placeholder="Search by Restaurant name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="searchButton"
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

        <div className="cardContainer">
          {filterRestaurent.map((restaurant) => (
            <Link to={"/restaurents/" + restaurant.info.id} key={restaurant.info.id}><FoodCard restroData={restaurant} /> </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
