import React from 'react';
import './Resultats.css';
import arrowLeft from '../Images/arrow-left.svg';
import arrowRight from '../Images/arrow-right.svg';
import arrowTop from '../Images/arrow-top.svg';
import arrowTopLeft from '../Images/arrow-top-left.svg';
import arrowTopRight from '../Images/arrow-top-right.svg';
import data from "./data.json";
import InstructionList from "./InstructionList";

const signs = {
    "- 98": "↶",
    "-8": "↶",
    "-7": arrowTopLeft,
    "-3": arrowLeft,
    "-2": arrowLeft,
    "-1": arrowTopLeft,
    "0": arrowTop,
    "1": arrowTopRight,
    "2": arrowRight,
    "3": arrowRight,
    "4": arrowTop,
    "5": arrowTop,
    "6": "↻",
    "7": arrowTopRight,
    "8": "↺"
};

// (if signs === "0") {
//  phrase = "${text} sur ${distance > 1000 ? distance.arrondir au km : distance.arrondir au centaine de metre}"
// } else phrase = "Dans ${distance > 1000 ? distance.arrondir au km : distance.arrondir au centaine de metre}, ${text}";

const arrivée = "Paris";
const distance = Math.round(data.paths[0].distance / 1000);
const duréeHeure = Math.floor(data.paths[0].time / 3600000);
const duréeMinute = Math.floor(data.paths[0].time / 60) % 60;
const instructions = data.paths[0].instructions;

class Resultats extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ page: this.state.page + 1 })
    }

    render() {
        const { page } = this.state;
        return (
            <div className="page-resultats">
                <header>
                    <p>Notre Carte Magique indique {instructions.length} étapes avant d'arriver à {arrivée} ! </p>
                    <br />
                    <p>La distance est de {distance} km, pour une durée de {duréeHeure}h{duréeMinute}.</p>
                </header>
                {console.log(data)}
                <div className="resultats-divider">
                    <hr id="line1" />
                    <hr id="line2" />
                </div>
                <div className="instructions-container">
                    <InstructionList instructionList={instructions} page={page} />
                </div>
                <footer>
                    <button className="btn-back" type="button">Revenir à la carte</button>
                    <button className="btn-suite" type="button" onClick={this.handleClick}>Lire la suite</button>
                </footer>
            </div>
        )
    }
}

export default Resultats;