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

  add = () => {
    this.setState({
      result: this.state.num1 + this.state.num2
    })
  }

  subtract = () => {
    this.setState({
      result: this.state.num1 - this.state.num2
    })
  }

  multiply = () => {
    this.setState({
      result: this.state.num1 * this.state.num2
    })
  }

  divide = () => {
    this.setState({
      result: this.state.num1 / this.state.num2
    })
  }

  clear = () => {
    this.setState({
      result: 0,
      num1: '',
      num2: ''
    })
  }

  render() {
    const {result, num1, num2} = this.state;
    return (
      <div>
        <h1>Result: {result}</h1>
        <input value={num1} onChange={this.handleFirstNum} placeholder="First Number"/>
        <input value={num2} onChange={this.handleSecondNum} placeholder="Second Number"/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default Calculator;
