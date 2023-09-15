import { useState } from "react";
import { CARD_IMG_URL } from "../utils/constant";

const MenuItem = (props) => {
  const { menuItem } = props;
  const {
    name,
    cuisines,
    imageId,
    ratings,
    costForTwo,
    defaultPrice,
    price,
    category,
    description,
  } = menuItem?.card?.info;
  const [desc, setDesc] = useState(description.slice(0, 200) + "...");
  const [check, setCheck] = useState(true);
  const [readMore, setReadMore] = useState("Read More");

  return (
    <div className="w-3/5 flex bg-custom-menu m-5 p-5 rounded-xl">
      <img
        src={CARD_IMG_URL + imageId}
        alt=""
        className="w-52 h-52 rounded-2xl"
      />
      <div className="p-4 text-white">
        <h2 className="text-2xl text-yellow-400 font-bold">{name}</h2>
        <p className="">{category}</p>
        <h4 className="">
          <span>✯</span> {ratings.aggregatedRating.rating}
        </h4>
        <h4>{price / 100 || defaultPrice / 100} Rs</h4>
        <p className="text-gray-400">
          {desc}{" "}
          <button
            className="text-slate-500"
            onClick={() => {
              readMore === "Read More"
                ? (setDesc(description) , setReadMore("Collapse"))
                : (setDesc(description.slice(0, 200) + "...") , setReadMore("Read More"));
            }}
          >
            {readMore}
          </button>
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
