import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

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

  /*we need to now mirror our fish state over to what is our firebase 
  and in order to do that we need to sord of wait until this App component 
  is on the page and than we will start to sync them up */
  componentDidMount() { // react lifecycle method
    const { params } = this.props.match;

    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }

    //refs in firebase are sord of the reference to a piece of data in the database
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    }); // we need to  sync with the name of the store
  }

  componentDidUpdate() {
    console.log(this.state.order);
    // to convert the object order to a string representation: JSON.stringify
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order)); //store: order
  }

  componentWillUnmount() { // as soon as the component is unmounting
    base.removeBinding(this.ref);
  }

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

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order }

    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // if the fish exists, it will get it and add 1, else, it will set it to 1

    // 3. Call setState to update our state object
    this.setState({ order });

  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={500} cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
