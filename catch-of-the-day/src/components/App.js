import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import samplefishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Modify the copy
    fishes[`fish${Date.now()}`] = fish;
    // 3. Update state with setState, property and value are same so use shortcut
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: samplefishes });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. add to order or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update order in state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
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
        />
      </div>
    );
  }
}

export default App;
