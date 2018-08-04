import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      usename: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    axios
      .get("https://api.github.com/users/ManuelCabrera01")
      .then(response => this.setState({ username: response.data.name }));
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          CLICK ME MAH DUDE
        </button>
        <h1>{this.state.username}</h1>
      </div>
    );
  }
}

export default App;
