import React, { Component } from "react";
import CardList from "./components/CardList";
import { robots } from "./data/robots";
import MainTitle from "./components/MainTitle";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    // Handle search logic here
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.title
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase())
    })

    return (
      <>
        <MainTitle />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </>
    );
  }
}

export default App;
