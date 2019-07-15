import React, { Component } from "react";
import Nav from "../components/Nav";
import API from "../utils/API";

class Books extends Component {
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getBooks();
  };
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default Books;
