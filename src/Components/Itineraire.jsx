import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Troubadour from './Troubadour';
import Cheval from '../Images/cheval.png';
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
      isDeparture: true,
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
    const { depPoint } = this.props;
    const id = parseInt(event.target.id, 10);
    const selectLat = resultApiDep[id].point.lat;
    const selectLong = resultApiDep[id].point.lng;
    console.log(depPoint);
    depPoint.latitude = selectLat;
    depPoint.longitude = selectLong;
    this.setState({
      resultApiDep: [],
      isDeparture: false,
    });
  };

  handleClickArr = (event) => {
    const { resultApiArr } = this.state;
    const { arrPoint } = this.props;
    const id = parseInt(event.target.id, 10);
    const selectLat = resultApiArr[id].point.lat;
    const selectLong = resultApiArr[id].point.lng;
    console.log(arrPoint);
    arrPoint.latitude = selectLat;
    arrPoint.longitude = selectLong;
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
    const {
      departure,
      arrival,
      resultApiDep,
      resultApiArr,
      isDeparture,
    } = this.state;
    const {
      handleChangeArrival,
      handleChangeDeparture,
      handleClickDep,
      handleClickArr,
    } = this;
    return (
      <div className="itineraire-back">
        <h1 className="titreItineraire">L'itinéraire</h1>
        <div className="merde">
          <Link to="/Monture">
            <button type="button" className="buttonMonture">
              Changer de monture
            </button>
          </Link>

          <img className="cheval-itineraire" src={Cheval} alt="imageDragon" />
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
        </div>
        <div className="itineraire-liste">
          {isDeparture ? (
            <ul>
              {resultApiDep.map((city, index) => (
                <li key={city.osm_id}>
                  <button type="button" id={index} onClick={handleClickDep}>
                    {city.name} {city.state}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {resultApiArr.map((city, index) => (
                <li key={city.osm_id}>
                  <button type="button" id={index} onClick={handleClickArr}>
                    {city.name} {city.state}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="itineraire-bouton" type="button">
          <Link to="/Resultats" style={{ color: '#46191A' }}>
            Calculer mon itinéraire
          </Link>
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
