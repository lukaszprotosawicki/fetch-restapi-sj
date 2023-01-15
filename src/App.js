import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "wpisz datę",
    error: "",
  };

  handleDateChange = (e) => {
    const value = this.refs.number.value;
    console.log(value);
    fetch(`http://numbersapi.com/${value}/year?json`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error(res.status);
      })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          text: "W tym roku: " + data.text,
        })
      )
      .catch((err) => {
        this.setState({ text: "Jest problem " + err });
      });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleDateChange} type="text" ref="number" />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
