import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

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

      <button
        className="mx-4 bg-white"
        onClick={() => {
          login === "Login" ? setLogin("Logout") : setLogin("Login");
        }}
      >
        {login}
      </button>
    </div>
  );
};

export default Header;
