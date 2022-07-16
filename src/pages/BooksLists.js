import { Link } from "react-router-dom";
import Bookshelf from "../components/BookShelf";
import { useState, useEffect } from "react";
import * as BooksApi from "../BooksAPI.js";

const BooksLists = () => {
  const [Books, setBooks] = useState([]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf type={"currentlyReading"} books={Books} />
          <Bookshelf type={"wantToRead"} books={Books} />
          <Bookshelf type={"read"} books={Books} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/add-book">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksLists;
