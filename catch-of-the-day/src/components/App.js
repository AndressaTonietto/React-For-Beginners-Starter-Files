import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  /*initial state can either be set int the constructor
  constructor() {
    super();
    this.state = {

    }
  }
  or you can use a property: */
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // In order to update state you need to there existing setState Api otherwise is not going to work
    // 1. Take a copy of the existing state
    // because you never wnat to reach into state and actually motify it directly
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to that fishes available
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({
      //you pass it the peace of the state you wish to update
      fishes: fishes
      // fishes //if the property and the value are the same thing you can write just one time
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={500} cool={true} />
          <ul className="fishes">{Object.keys(this.state.fishes)}</ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
