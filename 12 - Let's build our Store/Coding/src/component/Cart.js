import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux/es";
import {clearCart} from "../utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItem = ()=>{
    dispatch(clearCart())
  }

  if (cartItems.length === 0) return <h1>There are no items</h1>;
  return (
    <>
      <div className="w-full bg-custom-color py-10 flex justify-center">
        <div className="w-[100%] relative lg:w-3/5  md:w-4/5 sm:w-11/12">
          <div className="w-[85%] m-auto text-center text-white text-2xl text-bold flex justify-between">
            <h1 className="font-semibold ">Cart</h1>
            <button className="text-sm bg-gray-500 text-black font-semibold p-2" onClick={clearCartItem}>Clear Cart</button>
          </div>
          <div className="m-2 p-2 rounded-xl text-white font-bold">
            {cartItems.map((cart, index) => (
              <MenuItem key={index++} item={cart.item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
