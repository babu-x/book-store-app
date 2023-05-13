import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header-container">
      <Link to="/" className="link">
        <li className="nav-item">Home</li>
      </Link>
      <Link className="link" to="/bookslist">
        <li className="nav-item">Books List</li>
      </Link>
      <Link className="link" to="/addyourbook">
        <li className="nav-item">Add Book</li>
      </Link>
    </ul>
  );
};

export default Header;
