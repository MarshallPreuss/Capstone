import React from 'react';
import Dashboard from './Pages/Dashboard'
import About from './components/About'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

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
