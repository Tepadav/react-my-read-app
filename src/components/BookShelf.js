import PropTypes from "prop-types";
import Book from "./Books";

const Bookshelf = ({ type, books, onBookShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {type === "currentlyReading" && "Currently Reading"}
        {type === "wantToRead" && "Want to Read"}
        {type === "read" && "Read"}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === type)
            .map((book) => {
              return (
                <li key={book.id}>
                  <Book onBookShelfChange={onBookShelfChange} book={book} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;

Bookshelf.propType = {
  type: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};
