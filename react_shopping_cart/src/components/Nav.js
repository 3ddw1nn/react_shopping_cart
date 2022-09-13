import { Link } from "react-router-dom";

const Nav = () => {
  const logoStyle = {
    fontSize: "50",
    color: "white",
    textDecoration: "none",
  };
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <h3>
        <Link className="logo-style" style={logoStyle} to="/">
          {" "}
          Coppit
        </Link>
      </h3>
      <ul className="nav-links">
        <li>
          <Link style={navStyle} to="/Shop">
            Shop
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="/Cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
