import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { booksJsonData } from "./components/BooksJsonData";
import { useState } from "react";
import EachBookDetails from "./components/EachBookDetails";

const App = () => {
  const [booksData, setBooksData] = useState(booksJsonData);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/bookslist"
            element={<BooksList booksData={booksData} />}
          />
          <Route
            exact
            path="/addyourbook"
            element={
              <AddBook booksData={booksData} setBooksData={setBooksData} />
            }
          />
          <Route exact path="/bookslist/:id" element={<EachBookDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
