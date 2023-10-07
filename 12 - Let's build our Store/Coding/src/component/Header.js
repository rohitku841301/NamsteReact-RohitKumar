import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import cart from "../../cart.svg"

const Header = () => {
  const [login, setLogin] = useState("Login");
  const {userName} = useContext(userContext);
  
  // Subscribing the store using selector
  const cartItems = useSelector((store)=>store.cart.items)


  useEffect(() => {
    // console.log("useEffect render");
  }, [login]);

  return (
    <div className="flex justify-between px-2 py-4 relative w-full z-20 bg-custom-color lg:px-20 sm:px-10 xs:px-4">
      <ul className="flex text-white text-sm">
        <li className="mx-2 lg:mx-4 ">
          <Link to="/restaurent"> Restaurant </Link>
        </li>

        <li className="mx-2 sm:mx-4">
          <Link to="/work">Work</Link>
        </li>
        <li className="mx-2 sm:mx-4">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-2 sm:mx-4 ">
          <Link to="/cart" className="flex"><img src={cart} alt="cart" /> - {cartItems.length}</Link>
        </li>
      </ul>

    <div className="flex text-white text-sm">
      <button
        className="mx-2 sm:mx-4 bg-black"
        onClick={() => {
          login === "Login" ? setLogin("Logout") : setLogin("Login");
        }}
      >
        {login}
      </button>
      <h2>{userName}</h2>
      </div>
    </div>
  );
};

export default Header;
