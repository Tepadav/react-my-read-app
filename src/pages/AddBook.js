import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Books";
import * as BooksApi from "../BooksAPI";

const AddBook = () => {
  const [searchValue, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const search = async () => {
      const res = await BooksApi.search(searchValue, undefined);
      if (res?.items) {
        setBooks([]);
      } else {
        setBooks(res);
      }
    };

    if (searchValue === "") {
      return;
    }
    search();
  }, [searchValue]);

  const updateSearchInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => updateSearchInput(e)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default AddBook;
