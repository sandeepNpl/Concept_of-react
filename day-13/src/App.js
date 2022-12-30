import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/pagenotFound";
import "./App.css";
import BookDetails  from "./pages/BookDetails";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path ="books">
            <Route index element={<b>Books Details</b>} />
            <Route path=":id/:author" element={<BookDetails/>} />
            <Route path="buy">
              <Route index element={<b>Buy Books</b>}></Route>
              <Route path="fiction" element={"Buy Fiction Book"}/>
              <Route path="drama" element={"Buy Drama Book"}/>
            </Route>
          </Route>        
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </Router>
    </div>
  );
};
export default App;
