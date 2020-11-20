import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Monture from './Components/Monture';
import Itineraire from './Components/Itineraire';
import Resultats from './Components/Resultats';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depPoint: {
        latitude: 0,
        longitude: 0,
      },
      arrPoint: {
        latitude: 0,
        longitude: 0,
      },
    };
  }

  render() {
    const { depPoint, arrPoint } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Monture" component={Monture} />
          <Route
            path="/Itineraire"
            component={() => (
              <Itineraire arrPoint={arrPoint} depPoint={depPoint} />
            )}
          />
          <Route path="/Resultats" component={Resultats} />
        </Switch>
      </Router>
    );
  }
}

export default App;
