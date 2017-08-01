import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from 'router';
import request from 'request';

const router = Router();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', //initializing the state with a value and data object
    data: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData(){
    const options = {
      method: 'GET'
    };
    var res = await fetch('http://localhost:8000/ping', options);
    res = await res.json();
    this.setState({
      data: res.Data
    });
    console.log('RESPONSE ----->', res.Data);
  };

  handleChange(event){
    console.log('event', event.target.value);
    this.setState({value: event.target.value});
  };

  handleButtonClick(event){
    event.preventDefault();
    this.getData();
    console.log("Button clicked!", this.state.value);
  };

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todo App</h2>
      </div>
      <h1>Enter a todo item</h1>
      <form>
        <input type="text" placeholder="Todo" value={this.state.value} onChange={this.handleChange} /><br/><br/>
        <input type="submit" value="Submit" onClick={this.handleButtonClick}/>
      </form>
      <div>
      <h1>Data</h1>
      {
        this.state.data.map((data, idx) => {
          return (
            <h1>{data.name}</h1>
          );
        })
      }
      </div>
      </div>
    );
  };
}

export default App;
