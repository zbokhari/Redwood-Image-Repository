import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js';
import './App.css';


//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Gif from './components/gif/gif.js';
import Jpeg from './components/jpeg/jpeg.js';
import Png from './components/png/png.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className ="Route-Manager">
          {/* Routes */}
          <Switch>
            <Route exact path='/' render={(renderProps) => <Home />} />
            <Route path='/gif' render={(renderProps) => <Gif />} />
            <Route path='/jpeg' render={(renderProps) => <Jpeg />} />
            <Route path='/png' render={(renderProps) => <Png />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;