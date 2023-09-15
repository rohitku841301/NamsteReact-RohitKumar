import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Dummy = () => {
  useEffect(() => {
    fetchRestro();
  }, []);

  const fetchRestro = async () => {
    console.log("Fetching data...");
    try {
      const data = await fetch("https://www.swiggy.com/dapi/homepage/getCards?lat=25.7807374&lng=84.72445599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>highlight</h1>
    </div>
  );
};

export default Dummy;




      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"