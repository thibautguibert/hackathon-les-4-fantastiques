import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Troubadour from './Troubadour';
import './Itineraire.css';

class Itineraire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'c538faf0-14b9-4af5-8901-07cbc87d8b26',
      departure: '',
      arrival: '',
      resultApiDep: [],
      resultApiArr: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { departure, arrival } = this.state;
    if (prevState.departure !== departure && departure.length > 3) {
      this.callApiDep();
    }
    if (prevState.arrival !== arrival && arrival.length > 3) {
      this.callApiArr();
    }
  }

  handleChangeDeparture = (event) => {
    this.setState({ departure: event.target.value });
  };

  handleChangeArrival = (event) => {
    this.setState({ arrival: event.target.value });
  };

  handleClickDep = (event) => {
    const { resultApiDep } = this.state;
    const { depPoint, ville } = this.props;
    const id = parseInt(event.target.id, 10);
    const selectLat = resultApiDep[id].point.lat;
    const selectLong = resultApiDep[id].point.lng;
    const selectVille = resultApiDep[id].name;
    console.log(depPoint);
    depPoint.latitude = selectLat;
    depPoint.longitude = selectLong;
    ville.départ = selectVille;
    this.setState({
      resultApiDep: [],
    });
  };

  handleClickArr = (event) => {
    const { resultApiArr } = this.state;
    const { arrPoint, ville } = this.props;
    const id = parseInt(event.target.id, 10);
    const selectLat = resultApiArr[id].point.lat;
    const selectLong = resultApiArr[id].point.lng;
    const selectVille = resultApiArr[id].name;
    console.log(arrPoint);
    arrPoint.latitude = selectLat;
    arrPoint.longitude = selectLong;
    ville.arrivée = selectVille;
    this.setState({
      resultApiArr: [],
    });
  };

  callApiArr() {
    const { arrival, apiKey } = this.state;
    axios
      .get(
        `https://graphhopper.com/api/1/geocode?q=${arrival}&locale=fr&debug=true&key=${apiKey}`
      )
      .then((res) => this.setState({ resultApiArr: res.data.hits }));
  }

  callApiDep() {
    const { departure, apiKey } = this.state;
    axios
      .get(
        `https://graphhopper.com/api/1/geocode?q=${departure}&locale=fr&debug=true&key=${apiKey}`
      )
      .then((res) => this.setState({ resultApiDep: res.data.hits }));
  }

  render() {
    const { departure, arrival, resultApiDep, resultApiArr } = this.state;
    const {
      handleChangeArrival,
      handleChangeDeparture,
      handleClickDep,
      handleClickArr,
    } = this;
    return (
      <div>
        <form className="itineraryAddress">
          <input
            type="text"
            id="departure"
            name="departure"
            value={departure}
            placeholder="Départ"
            onChange={handleChangeDeparture}
          />
          <input
            type="text"
            id="arrival"
            name="arrival"
            value={arrival}
            placeholder="Arrivée"
            onChange={handleChangeArrival}
          />
        </form>
        <ul>
          {resultApiDep.map((city, index) => (
            <li key={city.osm_id}>
              <button type="button" id={index} onClick={handleClickDep}>
                {city.name} {city.state}
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {resultApiArr.map((city, index) => (
            <li key={city.osm_id}>
              <button type="button" id={index} onClick={handleClickArr}>
                {city.name} {city.state}
              </button>
            </li>
          ))}
        </ul>
        <button type="button">
          <Link to="/Resultats">Result</Link>
        </button>
        <div>
          <Troubadour />
        </div>
      </div>
    );
  }
}

export default Itineraire;

// import React from 'react';
// import SearchAddress from './SearchAddress';
// import './Itineraire.css';

// function Itineraire(props) {
//   const {
//     departure,
//     arrival,
//     resultApiDep,
//     resultApiArr,
//     handleChangeArrival,
//     handleChangeDeparture,
//     handleClickDep,
//     handleClickArr,
//   } = props;
//   return (
//     <div>
//       <SearchAddress
//         departure={departure}
//         arrival={arrival}
//         resultApiDep={resultApiDep}
//         resultApiArr={resultApiArr}
//         handleChangeArrival={handleChangeArrival}
//         handleChangeDeparture={handleChangeDeparture}
//         handleClickDep={handleClickDep}
//         handleClickArr={handleClickArr}
//       />
//     </div>
//   );
// }

// export default Itineraire;
