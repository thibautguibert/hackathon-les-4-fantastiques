import React from 'react';
import axios from 'axios';

class SearchAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'c538faf0-14b9-4af5-8901-07cbc87d8b26',
      departure: '',
      arrival: '',
      resultApiDep: [],
      resultApiArr: [],
      depPoint: {
        latitude: 0,
        longitude: 0,
      },
      arrPoint: {
        latitude: 0,
        longitude: 0,
      },
    };
    this.handleChangeDeparture = this.handleChangeDeparture.bind(this);
    this.handleChangeArrival = this.handleChangeArrival.bind(this);
    this.handleClickDep = this.handleClickDep.bind(this);
    this.handleClickArr = this.handleClickArr.bind(this);
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

  handleChangeDeparture(event) {
    this.setState({ departure: event.target.value });
  }

  handleChangeArrival(event) {
    this.setState({ arrival: event.target.value });
  }

  callApiDep() {
    const { departure, apiKey } = this.state;
    axios
      .get(
        `https://graphhopper.com/api/1/geocode?q=${departure}&locale=fr&debug=true&key=${apiKey}`
      )
      .then((res) => this.setState({ resultApiDep: res.data.hits }));
  }

  callApiArr() {
    const { arrival, apiKey } = this.state;
    axios
      .get(
        `https://graphhopper.com/api/1/geocode?q=${arrival}&locale=fr&debug=true&key=${apiKey}`
      )
      .then((res) => this.setState({ resultApiArr: res.data.hits }));
  }

  handleClickDep(event) {
    const { resultApiDep, depPoint } = this.state;
    const id = parseInt(event.target.id, 10);
    const selectLat = resultApiDep[id].point.lat;
    const selectLong = resultApiDep[id].point.lng;
    console.log(depPoint);
    this.setState({
      depPoint: {
        latitude: selectLat,
        longitude: selectLong,
      },
      resultApiDep: [],
    });
  }

  handleClickArr(event) {
    const { resultApiArr, arrPoint } = this.state;
    const id = parseInt(event.target.id, 10);
    const selectLat = resultApiArr[id].point.lat;
    const selectLong = resultApiArr[id].point.lng;
    console.log(arrPoint);
    this.setState({
      arrPoint: {
        latitude: selectLat,
        longitude: selectLong,
      },
      resultApiArr: [],
    });
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
      </div>
    );
  }
}

export default SearchAddress;
