import React, { Component } from "react";
import Test from "../components/Test";
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
        <Test />
      </div>
    );
  }
}

export default Books;
