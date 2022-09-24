import React from "react";

class StateIN extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hemanth Adepu",
      Company: "Prodapt"
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.Company}</h1>
      </>
    );
  }
}
export default StateIN;
