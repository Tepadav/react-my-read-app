import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import BooksLists from "./pages/BooksLists";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<BooksLists />} />
        <Route exact path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
