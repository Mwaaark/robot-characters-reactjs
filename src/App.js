import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robotCharacters, searchField } = this.state;
    const filteredRobotCharacters = robotCharacters.filter((robotCharacter) =>
      robotCharacter.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Robot Characters</h1>
        <SearchBox
          placeholder="search robot characters"
          handleChange={this.handleChange}
        />
        <CardList robotCharacters={filteredRobotCharacters} />
      </div>
    );
  }
}

export default App;
