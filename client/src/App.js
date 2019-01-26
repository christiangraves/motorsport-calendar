import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/HomePage/Home';
import Series from './components/UserPage/Series'
import './App.css';

const App = () =>  (
  <BrowserRouter>
        <div>

      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Series}/>

    </div>
  </BrowserRouter>
)



export default App;
