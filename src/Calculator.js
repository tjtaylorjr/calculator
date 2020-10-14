import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    };
  }

  handleFirstNum = e => {
    const num1 = Number(parseInt(e.target.value));
    this.setState({num1});
  };

  handleSecondNum = e => {
    const num2 = Number(parseInt(e.target.value));
    this.setState({num2});
  };

  render() {
    return (
      <div>
        <h1>Result: {this.state.result}</h1>
        <input value={this.state.num1} onChange={this.handleFirstNum} placeholder="First Number"/>
        <input value={this.state.num2} onChange={this.handleSecondNum} placeholder="Second Number"/>
      </div>
    );
  }
}

export default Calculator;
