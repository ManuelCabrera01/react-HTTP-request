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
    axios.get("https://api.github.com/users/ManuelCabrera01").then(response =>
      this.setState(
        {
          username: response.data.name,
          bio: response.data.bio,
          followers: response.data.followers,
          following: response.data.following,
          picture: response.data.avatar_url
        },
        console.log(response)
      )
    );
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          CLICK ME MAH DUDE
        </button>
        <h1>User:</h1>
        <h2>{this.state.username}</h2>
        <h3>{this.state.bio}</h3>
        <hr />
        <p>followers</p>
        {this.state.followers}
        <p>following</p>
        {this.state.following}
        <br />
        <img src={this.state.picture} />
      </div>
    );
  }
}

export default App;
