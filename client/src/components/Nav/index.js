import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h1>Google Books</h1>
        <Link className="link" to="/">
          Search
        </Link>
        <Link className="link" to="/saved">
          Saved
        </Link>
      </nav>
    );
  }
}

export default Nav;
