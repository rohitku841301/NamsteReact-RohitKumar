import { useState } from "react";
import { CARD_IMG_URL } from "../utils/constant";

const MenuItem = (props) => {
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
  } = props?.item?.card?.info;
  // const [desc, setDesc] = useState(description.slice(0, 200) + "...");
  // const [check, setCheck] = useState(true);
  // const [readMore, setReadMore] = useState("Read More");

  return (
    // <>

    // </>
    <div className="flex bg-custom-menu m-5 pb-12 border-b-2 border-gray-600">
      <img
        src={CARD_IMG_URL + imageId}
        alt=""
        className="w-28 h-28 rounded-2xl"
      />
      <div className="p-2 text-white">
        <div className="flex justify-between">
          <h2 className="text-xl text-yellow-400 font-bold">{name}</h2>
          <h4 className="">
            <span>✯</span> {ratings.aggregatedRating.rating}
          </h4>
        </div>
        <h6 className="text-xs text-gray-300">{category}</h6>

        <h4>₹ {price / 100 || defaultPrice / 100}</h4>
        <p className="text-gray-400 text-xs">
          {description}
          {/* {desc}{" "}
          <button
            className="text-slate-500"
            onClick={() => {
              readMore === "Read More"
                ? (setDesc(description) , setReadMore("Collapse"))
                : (setDesc(description.slice(0, 200) + "...") , setReadMore("Read More"));
            }}
          >
            {readMore}
          </button> */}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
