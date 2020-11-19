import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Monture from './Components/Monture';
import Itineraire from './Components/Itineraire';
import Resultats from './Components/Resultats';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Monture" component={Monture} />
        <Route path="/Itineraire" component={Itineraire} />
        <Route path="/Resultats" component={Resultats} />
      </Switch>
    </Router>
  );
}

export default App;
