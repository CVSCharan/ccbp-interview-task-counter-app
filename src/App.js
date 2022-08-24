import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 100,
  };

  render() {
    const regDate = new Date("2022", "07", "23", "12", "00", "00");
    const currentDate = new Date();
    const { counter } = this.state;
    const diffTime = Math.abs(currentDate - regDate);
    this.setState({ counter: Math.ceil(diffTime / 1000) * 6 });

    return (
      <div className="app">
        <h1 className="heading1">Counter App</h1>
        <div className="reg-date">
          <p className="para1">The Regestration Starts From :</p>
          <div className="reg-date">
            <p className="para1">
              {regDate.getDate()} / 0{regDate.getMonth() + 1} /{" "}
              {regDate.getFullYear()}
            </p>
            <p className="para1">
              {regDate.getHours()} : {regDate.getMinutes()}0 :{" "}
              {regDate.getSeconds()}0 AM
            </p>
          </div>
        </div>
        <div className="reg-date">
          <p className="para1">Number of Registrations Counter: </p>
          <p className="para2"> {counter}</p>
        </div>
      </div>
    );
  }
}

export default App;
