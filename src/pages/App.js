import React, { Component } from 'react';
import '../styles/App.scss';
import  {BrowserRouter as Router} from 'react-router-dom'
import Navigation from '../layouts/Navigation';
import Page from '../layouts/Page';

import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            {<Navigation/>}
          </nav>
          <div className="page">
            {<Page/>}
          </div>
          {/* <DarkMode/> */}
        </div>
      </Router>
    );
  }
}

export default App;
