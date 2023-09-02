import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("Login")
    return (
      <div className="headerContainer">
        <h2>BoldBites</h2>
        <ul className="menuItem">
          <a href="#">
            <li>Restaurant</li>
          </a>
          <a href="#">
            <li>Work</li>
          </a>
          <a href="#">
            <li>Cart</li>
          </a>
          
            <button onClick={()=>{
                (login==="Login")?setLogin("Logout"):setLogin("Login")
              
            }}>{login}</button>
        
        </ul>
      </div>
    );
  };

export default Header;