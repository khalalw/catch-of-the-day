import React, { Component } from "react";
import { getFunName } from "../helpers";
class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = e => {
    // 1. Prevent form from submitting
    e.preventDefault();
    // 2. Get text from input
    const storeName = this.myInput.current.value;
    // 3. Change page to the store to whatever they entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
