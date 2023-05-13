import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const BooksList = (props) => {
  const { booksData } = props;
  const [filterData, setFilterData] = useState(booksData);
  const getUsersSearchValue = (e) => {
    const filteredData = booksData.filter((each) =>
      each.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(filteredData);
  };
  return (
    <div className="bookslist-container">
      <input
        type="text"
        className="input-field"
        placeholder="Search..."
        onChange={getUsersSearchValue}
      />
      <ul className="books-cards-container">
        {filterData.map((each, i) => (
          <Link className="link" to={`/bookslist/${each.id}`} key={i}>
            <div className="book-card">
              <img
                className="thumbnail"
                src={each.thumbnailUrl}
                alt={each.title}
              />
              <h1 className="title">{each.title}</h1>
              <p className="author">{each.authors}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
