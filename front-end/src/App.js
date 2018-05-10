import React, { Component } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="">

        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
