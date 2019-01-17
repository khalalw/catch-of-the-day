import React, { Component } from "react";
import { render } from "react-dom";
import "../css/style.css";
class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
