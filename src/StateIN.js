import React from "react";

class StateIN extends React.Component {
  constructor(props) {
    super(props);
    //state initialised
    this.state = {
      name: "Hemanth Adepu",
      Company: "Prodapt"
    };
  }
  //update state
  updateState = () => {
    this.setState({ name: "New name" });
  };
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.Company}</h1>
        <button onClick={this.updateState}>Click me!</button>
      </>
    );
  }
}
export default StateIN;
