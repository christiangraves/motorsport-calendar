import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/HomePage/Home';
import LandingPage from './components/UserPage/LandingPage'
import './App.css';

const App = () =>  (
  <BrowserRouter>
        <div>

      <Route exact path='/' component={Home}/>
      <Route exact path='/landing' component={LandingPage}/>

    </div>
  </BrowserRouter>
)



export default App;
