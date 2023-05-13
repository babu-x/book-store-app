import { useNavigate, useParams } from "react-router-dom";
import { booksJsonData } from "../BooksJsonData";
import "./index.css";

const EachBookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = booksJsonData.find((book) => book.id === parseInt(id));
  const { title, thumbnailUrl, longDescription, authors } = book;
  return (
    <div className="books-detail-container">
      <div className="width">
        <img className="book-image" src={thumbnailUrl} alt={title} />
        <div>
          <h1 className="book-title">{title}</h1>
          <p className="book-author">
            {" "}
            Written by <span>{authors}</span>
          </p>
          <p className="book-des">{longDescription}</p>
          <button
            className="back-to-list-btn"
            onClick={() => navigate("/bookslist")}
          >
            Back to List of Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachBookDetails;
