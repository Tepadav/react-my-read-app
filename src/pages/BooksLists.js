import { Link } from "react-router-dom";
import Bookshelf from "../components/BookShelf";
import { useState, useEffect } from "react";
import * as BooksApi from "../BooksAPI.js";

const BooksLists = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll();

      setBooks(res);
    };

    getBooks();
  }, []);

  const changeBookShelf = (newBook, shelf) => {
    BooksApi.update(newBook, shelf);

    setBooks(
      Books.map((book) => {
        if (book.id === newBook.id) {
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
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            onBookShelfChange={changeBookShelf}
            type={"currentlyReading"}
            books={Books}
          />
          <Bookshelf
            onBookShelfChange={changeBookShelf}
            type={"wantToRead"}
            books={Books}
          />
          <Bookshelf
            onBookShelfChange={changeBookShelf}
            type={"read"}
            books={Books}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/add-book">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksLists;
