import React from 'react';
import wejdene from '../Images/troubadour-clipart-xl.png';
import parchemin from '../Images/parchemin.png';
import './Troubadour.css';

function Troubadour() {
    return(
        <div className="display">
            <img src={wejdene} alt="troubadour" className="trouba"></img>
            <img src={parchemin} alt="parchemin" className="parchemin"></img>
        </div>
    )
}

export default Troubadour;