import React, { Component } from "react";
import "../css/style.css";
import { getFunName } from "../helpers";
class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
