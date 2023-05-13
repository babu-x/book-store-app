import { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const data = {
  id: uuidv4(),
  title: "",
  authors: "",
  thumbnailUrl: "",
};

const AddBook = (props) => {
  const navigate = useNavigate();
  const { setBooksData } = props;
  const [formData, setFormData] = useState(data);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddingBookDataIntoBooksList = () => {
    if (
      !formData.title.trim() ||
      !formData.authors.trim() ||
      !formData.thumbnailUrl.trim()
    ) {
      alert("Please fill all the fields.");
    } else {
      setBooksData((prevData) => [...prevData, formData]);
      navigate("/bookslist");
    }
  };

  return (
    <div className="add-your-book-container">
      <h1 className="add-your-book-container-title">Add your Book</h1>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="input"
          id="title"
          type="text"
          placeholder="Title"
          onChange={handleInput}
        />
      </div>
      <div className="input-container">
        <label htmlFor="author">Author</label>
        <input
          name="authors"
          className="input"
          id="author"
          type="text"
          placeholder="Author"
          onChange={handleInput}
        />
      </div>
      <div className="input-container">
        <label htmlFor="thumbnail">Thumbnail Image Url</label>
        <input
          name="thumbnailUrl"
          className="input"
          id="thumbnail"
          type="text"
          placeholder="Thumbnail Image Url"
          onChange={handleInput}
        />
      </div>
      <button
        className="add-button"
        onClick={handleAddingBookDataIntoBooksList}
      >
        Add
      </button>
    </div>
  );
};

export default AddBook;
