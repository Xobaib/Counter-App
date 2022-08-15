import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters.jsx";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // this method is the perfect place to make Ajax calls to get data from the server.
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset() {
    const reset = this.state.counters.map((r) => {
      r.value = 0;
      return r;
    });

    this.setState({
      counters: reset,
    });
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  }
  render() {
    console.log("App - Renderd");
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset.bind(this)}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete.bind(this)}
          />
        </div>
      </>
    );
  }
}

export default App;
