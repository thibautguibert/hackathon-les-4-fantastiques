import React from 'react';
import './Resultats.css';
import dataJson from "./data.json";
import InstructionList from "./InstructionList";
import axios from 'axios';
import { Link } from "react-router-dom";


const monture = "car";

class Resultats extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            distance: 0,
            duréeHeure: 0,
            duréeMinute: 0,
            instructions: [],
            isLoaded: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);

    }

    componentDidMount() {
        const { arrPoint, depPoint } = this.props;
        const monture = "car";
        const apiKey = 'c538faf0-14b9-4af5-8901-07cbc87d8b26';
        const url = `https://graphhopper.com/api/1/route?point=${depPoint.latitude},${depPoint.longitude}&point=${arrPoint.latitude},${arrPoint.longitude}&vehicle=${monture}&locale=fr&calc_points=true&key=${apiKey}`
        console.log(url);
        axios.get(url).then(res => {
            this.setState({
                distance: Math.round(res.data.paths[0].distance / 1000),
                duréeHeure: Math.floor(res.data.paths[0].time / 3600000),
                duréeMinute: Math.floor(res.data.paths[0].time / 60) % 60,
                instructions: res.data.paths[0].instructions,
                isLoaded: true,
            })
            console.log(this.state.instructions)
            console.log(res.data.paths[0].instructions)
        })
    }

    handleClick() {
        this.setState({ page: this.state.page + 1 })
    }

    handleBackClick() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { page, distance, duréeHeure, duréeMinute, instructions, isLoaded } = this.state;
        const { ville } = this.props;
        return (
            <div className="page-resultats">
                <header>
                    <p>Notre Carte Magique indique {instructions.length} étapes avant d'arriver à {ville.arrivée} ! </p>
                    <br />
                    <p>La distance est de {distance} km, pour une durée de {duréeHeure}h{duréeMinute}.</p>
                </header>
                <div className="resultats-divider">
                    <hr id="line1" />
                    <hr id="line2" />
                </div>
                {            console.log(instructions)
                }
                <div className="instructions-container">
                    {isLoaded
                        ? <InstructionList instructionList={instructions} page={page} />
                        : "loading..."
                    }
                </div>
                <footer>
                    <div className="btn-page">

                        {page === 0 ? "" : <button className="btn-suite" type="button" onClick={this.handleBackClick}>Précédent</button>}
                        {(instructions.length / (page + 1)) > 4 ? <button className="btn-suite" type="button" onClick={this.handleClick}>Lire la suite</button> : ""}
                    </div>

                    <Link to="/Itineraire">
                        <button className="btn-back" type="button">Revenir à la carte</button>
                    </Link>
                </footer>
            </div>
        )
    }
}

export default Resultats;
