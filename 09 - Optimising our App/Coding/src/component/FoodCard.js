import { CARD_IMG_URL } from "../utils/constant";

const FoodCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, locality, areaName, sla } =
    restroData?.info;

  return (
    <>
      <div className="card">
        <img src={CARD_IMG_URL + cloudinaryImageId} alt="" />
        <div className="thinBlack"></div>
        <div className="cardData">
          <h2 className="cardTitle">{name}</h2>
          <div className="starCuisin">
            <p className="cardCuisines">{cuisines.slice(0, 3).join(", ")}</p>
            <h4 className="rating">
              <span>✯</span> {avgRating}
            </h4>
          </div>
          <div className="distanceLocality">
          <h5>{locality}, {areaName}</h5>
          <h5>{sla.slaString}</h5>
          </div>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
