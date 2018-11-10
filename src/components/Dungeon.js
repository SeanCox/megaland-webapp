import React, { Component } from "react";
import cards from "../data/dungeonCards.json";

export default class Dungeon extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: cards, selectedCard: "" };
    this.handleFlipCard = this.handleFlipCard.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleFlipCard() {
    if (this.state.cards.length) {
      const muteableArray = this.state.cards.slice();
      const index = Math.floor(Math.random() * this.state.cards.length);
      muteableArray.splice(index, 1);
      this.setState({
        cards: muteableArray,
        selectedCard: this.state.cards[index]
      });
    }
  }
  handleReset() {
    this.setState({ cards: cards, selectedCard: "" });
  }
  render() {
    if (this.props.show) {
      return (
        <div>
          <button onClick={this.handleFlipCard}>Flip Card</button>
          <div>{this.state.selectedCard.name}</div>
          <div>
            damage: {this.state.selectedCard.damage}{" "}
            {this.state.selectedCard.jump}
          </div>
          {!this.state.cards.length ? (
            <button onClick={this.handleReset}>reset</button>
          ) : null}
        </div>
      );
    }
    return null;
  }
}
