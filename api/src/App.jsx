import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GenerateEmployee from "./GenerateEmployee";
import DisplayEmployee from "./DisplayEmployee";

class App extends Component {
  constructor(props) {
    super(props);
    const SimpsonQuote = {
      quote:
        "Shoplifting is a victimless crime, like punching someone in the dark.",
      character: "Nelson Muntz",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
    };
    this.state = {
      employee: SimpsonQuote
    };
  }
  getEmployee() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=9")
      .then(response => response.json())
      .then(data => {
        this.setState({
          employee: data[8]
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DisplayEmployee employee={this.state.employee} />
          <GenerateEmployee selectEmployee={() => this.getEmployee()} />
        </header>
      </div>
    );
  }
}

export default App;
