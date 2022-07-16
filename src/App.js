import "./App.css";
import { useState } from "react";
import AddBook from "./pages/AddBook";
import BooksLists from "./pages/BooksLists";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <AddBook onShowSearchPage={setShowSearchpage} />
      ) : (
        <BooksLists onShowSearchPage={setShowSearchpage} />
      )}
    </div>
  );
}

export default App;
