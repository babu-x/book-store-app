import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="quote">
        Whatever the cost of our libraries, the price is cheap compared to that
        of an ignorant nation.
      </h1>
      <button
        className="see-books-list-btn"
        onClick={() => {
          navigate("/bookslist");
        }}
      >
        See Books List
      </button>
    </div>
  );
};

export default Home;
