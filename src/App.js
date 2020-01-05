import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Header from "./header"
import MemeGenerator from "./memeGenerator"


class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  
  

  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}




export default App;
