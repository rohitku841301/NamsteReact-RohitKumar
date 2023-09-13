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
    description
  } = menuItem?.card?.info;
  return (
    <div className="menuItemCard">
      <img src={CARD_IMG_URL + imageId} alt="" />
      <div className="menuItemData">
        <h2 className="menuItemTitle">{name}</h2>
        <p className="menuItemCategory">{category}</p>
        <h4 className="menuItemCategory"><span>✯</span> {ratings.aggregatedRating.rating}</h4>
        <h4>{price/100 || defaultPrice/100} Rs</h4>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default MenuItem;
