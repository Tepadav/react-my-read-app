import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Books";
import * as BooksApi from "../BooksAPI";

const timeoutMilliseconds = 2000;
let searchTimeout = setTimeout(() => {}, timeoutMilliseconds);

const AddBook = () => {
  const [searchValue, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const search = (value) => {
    const searchfunc = async () => {
      if (value !== "") {
        const res = await BooksApi.search(value, undefined);
        if (res?.items) {
          setBooks([]);
        } else {
          setBooks(res);
        }
      }
    };

    searchfunc();
  };

  const resetSearchTimeout = () => {
    clearTimeout(searchTimeout);
  };

  const setNewTimeout = (value) => {
    searchTimeout = setTimeout(() => {
      search(value);
    }, timeoutMilliseconds);
  };

  const updateSearchInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value !== "") {
      resetSearchTimeout();
      setNewTimeout(value);
    } else {
      clearTimeout();
      setBooks([]);
    }
  };

  const changeBookShielf = (newbook, shelf) => {
    BooksApi.update(newbook, shelf);

    setBooks(
      books.map((book) => {
        if (book.id === newbook.id) {
          return {
            ...book,
            shelf,
          };
        } else {
          return book;
        }
      })
    );
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
            return (
              <Book
                key={book.id}
                book={book}
                onBookShelfChange={changeBookShielf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default AddBook;
