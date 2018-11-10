import React, { Component } from "react";
import "./App.css";
import PickBuildings from "./components/PickBuildings";
import Dungeon from "./components/Dungeon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameState: "start",
      showBuildings: false,
      showDungeon: false
    };
    this.handlePickBuildings = this.handlePickBuildings.bind(this);
    this.handleDungeon = this.handleDungeon.bind(this);
  }
  handlePickBuildings() {
    this.setState(prevState => ({
      showBuildings: !prevState.showBuildings,
      gameState: "buildings"
    }));
  }

  handleDungeon() {
    this.setState(prevState => ({
      showDungeon: !prevState.showDungeon,
      gameState: "dungeon"
    }));
  }
  render() {
    if (this.state.gameState === "start") {
      return (
        <div className="App">
          <button onClick={this.handlePickBuildings}>Start</button>
        </div>
      );
    }
    if (this.state.gameState === "buildings") {
      return (
        <div className="App">
          <PickBuildings show={this.state.showBuildings} />
          <button onClick={this.handleDungeon}>Dungeon</button>
        </div>
      );
    }
    if (this.state.gameState === "dungeon") {
      return (
        <div className="App">
          <Dungeon show={this.state.showDungeon} />
        </div>
      );
    }
    return <div className="App">please refresh page</div>;
  }
}

export default App;
