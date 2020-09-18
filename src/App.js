import React from 'react';
import Dashboard from './Pages/Dashboard'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
        <Route exact path='/' component={Dashboard}/>

        <Route exact path='/about' component={About} />

        <Redirect to='/' />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
