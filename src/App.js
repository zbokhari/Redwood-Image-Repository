import React, { Component } from 'react';
import './App.css';
import {HOME, GIF, JPEG, PNG} from './paths';
import Home from './components/home';
import Gif from './components/gif';
import Jpeg from './components/jpeg';
import Png from './components/png';


class App extends Component {
  state={
    page: HOME,
  }

  reDirect = a => {
    this.setState({page:a})
  }

  renderPage = page => {
    switch(page) {
      case GIF:
        return (
          <Gif reDirect={this.reDirect}/>
        )
      case JPEG:
      return (
          <Jpeg reDirect={this.reDirect}/>
      )
      case PNG:
      return (
          <Png reDirect={this.reDirect}/>
      )
      case HOME:
        return (
          <Home reDirect={this.reDirect}/>
        )
      default:
        return <h1>Error 404 [PAGE NOT FOUND]</h1>  
    }
  }


  render() {
    return (
      <div>
          {this.renderPage(this.state.page)}
      </div>
    );
  }
}

export default App;
