import FoodCard from "./FoodCard";
import { restroDataList } from "../utils/restroDataList";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import axios, { isCancel, AxiosError } from "axios";

const Body = () => {
  let [resList, setResList] = useState(restroDataList);
  let [searchRestro, setSearchRestro] = useState([]);
  let [topRatedRestro, setTopRatedRestro] = useState([])

  let [filterRestaurent, setFilterRestaurent] = useState(restroDataList)

  let [search, setSearch] = useState("")

  useEffect(() => {
    swiggi();
  }, []);





  async function swiggi() {
    try {
      const response = await fetch(
        'https://www.swiggy.com/mapi/misc_new/location-features?lat=28.4657793&lng=77.0917003&features=CITY_INFO%2CINSTAMART'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
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
            <input type="text" placeholder="Search by Restaurant name" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className="searchButton" onClick={()=>{
              let restro = resList.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
              setFilterRestaurent(restro);
            }}>Search</button>
          </div>
        </div>

        <div className="cardContainer">
          {filterRestaurent.map((restaurant) => (
            <FoodCard key={restaurant.info.id} restroData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

// const swiggi = async () => {
//   const d = await fetch(
//     "https://www.swiggy.com/mapi/homepage/getCards?lat=28.4657793&lng=77.0917003",

//     {
//       method: "GET",
//       headers: {
//         'accept': "application/json",
//         'authority': "www.swiggy.com",
//         'method': "GET",
//         'path': "/mapi/homepage/getCards?lat=28.4657793&lng=77.0917003",
//         'scheme': "https",
//         'Accept': "*/*",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
//         'Origin': "http://localhost:1234",
//         'Referer': "http://localhost:1234/",
//         "Sec-Ch-Ua":
//           '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
//         "Sec-Ch-Ua-Mobile": "?1",
//         "Sec-Ch-Ua-Platform": "Android",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "cross-site",
//         "User-Agent":
//           "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
//       },
//     }
//   );

