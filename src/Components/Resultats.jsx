import React from 'react';
import './Resultats.css';
import Troubadour from './Troubadour'

const signs = {
    "- 98": "↶",
    "-8": "↶",
    "-7": "↖",
    "-3": "↰",
    "-2": "↰",
    "-1": "↖",
    "0": "↑",
    "1": "↗",
    "2": "→",
    "3": "→",
    "4": "↑",
    "5": "↑",
    "6": "↻",
    "7": "↗",
    "8": "↺"
};

function Resultats() {
    return (
        <div>
            <Troubadour />
        </div>
    )
}

export default Resultats;