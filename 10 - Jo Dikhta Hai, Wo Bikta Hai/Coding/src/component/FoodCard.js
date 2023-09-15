import { CARD_IMG_URL } from "../utils/constant";

const FoodCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, locality, areaName, sla } =
    restroData?.info;

  return (
    <>
    
      <div className="w-96 h-80 relative flex m-8 hover:border-blue-500">
        <img src={CARD_IMG_URL + cloudinaryImageId} alt=""  className="w-96 h-80 rounded-2xl"/>
        <div className="w-96 h-80 rounded-2xl absolute bottom-0"></div>
        <div className="absolute text-white bottom-0 py-4 px-1 w-96 bg-neutral-900">
          <h2 className="text-2xl text-yellow-300 font-bold">{name}</h2>
          <div className="flex justify-between">
            <p className="text-sm">{cuisines.slice(0, 3).join(", ")}</p>
            <h4 className="rating">
              <span>✯</span> {avgRating}
            </h4>
          </div>
          <div className="flex justify-between">
          <h5 className="text-sm">{locality}, {areaName}</h5>
          <h5>{sla.slaString}</h5>
          </div>
          <h4>{costForTwo}</h4>
        </div>
      </div>
   
    </>
  );
};

export default FoodCard;
