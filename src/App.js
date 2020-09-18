import React from 'react';
import Dashboard from './Pages/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
    <Nav />
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
