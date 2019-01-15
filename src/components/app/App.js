import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../views/home/HomeContainer';
import CategoryContainer from '../../views/category/CategoryContainer';
import Header from '../../views/header/Header';
import RandomContainer from '../../views/random/RandomContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route path="/" component={Header}/>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/categories/:id" component={CategoryContainer} />
            <Route path="/categories/:id/all" component={CategoryContainer}/>
            <Route path='/random' component={RandomContainer}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;