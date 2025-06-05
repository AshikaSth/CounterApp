import React, { Component } from "react";
import "../css/counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    // this.decrement = this.reset.bind(this);
  }

  increment = () =>{
    this.setState(prevState => {
      if(prevState.count < 10){
        return {count: prevState.count + 1};
      } else {
        alert("Counter cannot be greter than 10");
        return { count: prevState.count }; // No change if limit exceeded
      }
    });
  };

  decrement = () =>{
    this.setState(prevState => {
      if(prevState.count > 0){
        return {count: prevState.count - 1};
      } else {
        alert("Counter cannot be lesser than 0");
        return { count: prevState.count }; // No change if limit exceeded
      }
    });
  };

  

  reset =() => {
    this.setState({
      count: 0,
    })
  }; 

  render() {
    return (
      <div className="counter">
        <h1>Counter : {this.state.count}</h1>
        <button id= "increment" onClick={this.increment}>+</button>
        <button id= "decrement" onClick={this.decrement}>-</button>
        <button id= "reset" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
