import React from "react";
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

function Instruction() {
    return (

        <div className="instruction-container">
            <p className="number">1.</p>
            <p>Continuez sur 600m.</p>
            <img src={arrowTop} alt="arrow direction" />
        </div>
    )
}

export default Instruction;