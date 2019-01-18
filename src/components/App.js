import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    // 1. Copy the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;

    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
