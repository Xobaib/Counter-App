import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Reabderd");

    return (
      <>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              counter={counter}
            />
            <br />
          </div>
        ))}
      </>
    );
  }
}

export default Counters;
