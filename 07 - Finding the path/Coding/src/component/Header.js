import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  useEffect(() => {
    // console.log("useEffect render");
  }, [login]);

  return (
    <div className="headerContainer">
      <h2>BoldBites</h2>
      <ul className="menuItem">
        <li>
          <Link to="/restaurent"> Restaurant </Link>
        </li>

        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <button
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          {login}
        </button>
      </ul>
    </div>
  );
};

export default Header;
