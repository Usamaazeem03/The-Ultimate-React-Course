import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDercrement = this.handleDercrement.bind(this);
  }

  handleIncrement() {
    this.setState((curState) => ({ count: curState.count + 1 }));
  }
  handleDercrement() {
    this.setState((curState) => ({ count: curState.count - 1 }));
  }

  render() {
    const date = new Date("January 1, 1970");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDercrement}>-</button>
        <span>
          {this.state.count} 👉 {date.toDateString()}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
