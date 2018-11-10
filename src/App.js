import React, { Component } from "react";
import "./App.css";
import PickBuildings from "./components/PickBuildings";
import Dungeon from "./components/Dungeon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBuildings: false,
      showDungeon: false
    };
    this.handlePickBuildings = this.handlePickBuildings.bind(this);
    this.handleDungeon = this.handleDungeon.bind(this);
  }
  handlePickBuildings() {
    this.setState(prevState => ({
      showBuildings: !prevState.showBuildings
    }));
  }

  handleDungeon() {
    this.setState(prevState => ({
      showDungeon: !prevState.showDungeon
    }));
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handlePickBuildings}>Pick Buildings</button>
        <button onClick={this.handleDungeon}>Dungeon</button>
        <PickBuildings show={this.state.showBuildings} />
        <Dungeon show={this.state.showDungeon} />
      </div>
    );
  }
}

export default App;
