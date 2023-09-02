const Header = () => {
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
          <a href="#">
            <button>Login</button>
          </a>
        </ul>
      </div>
    );
  };

export default Header;