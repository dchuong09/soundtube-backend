import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import VideoPage from './pages/VideoPage';
import RecommendationPage from './pages/RecommendationPage';
import TrendingPage from './pages/TrendingPage';


class App extends Component {          
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/api/videos' component={VideosPage} />
            <Route exact path='/api/videos/trending' component={TrendingPage} />
            <Route exact path='/api/recommendations'component={RecommendationPage} />
            <Route path='/api/videos/:video_id' component={VideoPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
