import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robotCharacters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ robotCharacters: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search robot characters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList robotCharacters={this.state.robotCharacters} />
      </div>
    );
  }
}

export default App;
