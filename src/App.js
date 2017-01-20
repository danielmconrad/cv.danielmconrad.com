import React, { Component } from 'react';
import './App.css';

import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import Profile from './partials/Profile';
import Tech from './partials/Tech';
import Work from './partials/Work';
import Education from './partials/Education';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <div className="snapshot pure-g">
          <div className="snapshot-profile pure-u-1 pure-u-sm-5-8">
            <Profile />
          </div>
          <div className="snapshot-tech pure-u-1 pure-u-sm-3-8">
            <Tech />
          </div>
        </div>
        <Work />
        <Education />
      </div>
    );
  }
}

export default App;
