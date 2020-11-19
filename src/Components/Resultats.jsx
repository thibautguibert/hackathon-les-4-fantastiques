import React from 'react';
import './Resultats.css';
import Troubadour from './Troubadour'
import arrowLeft from '../Images/arrow-left.svg';
import arrowRight from '../Images/arrow-right.svg';
import arrowTop from '../Images/arrow-top.svg';
import arrowTopLeft from '../Images/arrow-top-left.svg';
import arrowTopRight from '../Images/arrow-top-right.svg';


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

function Resultats() {
    return (
        <div>
            <Troubadour />
        </div>
    )
}

export default Resultats;