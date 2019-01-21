import React, { Component } from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from ".//EditFishForm";

class Inventory extends Component {
  static propTypes = {
    addFish: PropTypes.func,
    deleteFish: PropTypes.func,
    fishes: PropTypes.obj,
    loadSampleFishes: PropTypes.func,
    updateFish: PropTypes.func,
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            fish={this.props.fishes[key]}
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
