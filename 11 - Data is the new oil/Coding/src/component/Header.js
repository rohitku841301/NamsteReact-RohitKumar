import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const {userName} = useContext(userContext);
  console.log(userName);

  useEffect(() => {
    // console.log("useEffect render");
  }, [login]);

  return (
    <div className="flex justify-between px-40 py-4 absolute w-full z-20">
      <ul className="flex text-white">
        <li className="mx-4">
          <Link to="/restaurent"> Restaurant </Link>
        </li>

        <li className="mx-4">
          <Link to="/work">Work</Link>
        </li>
        <li className="mx-4">
          <Link to="/about">About</Link>
        </li>

        <li className="mx-4">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>

    <div className="flex text-white">
      <button
        className="mx-4 bg-black"
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
