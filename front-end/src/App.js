import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';

class App extends Component {
  render() {
    return (
      <div className="">

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/api/videos' component={VideosPage} />
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
