import React from 'react';
import wejdene from '../Images/troubadour-clipart-xl.png';
import parchemin from '../Images/parchemin.png';
import './Troubadour.css';

function Troubadour() {
    return(
        <div className="display">
            <img src={wejdene} alt="troubadour" className="trouba"></img>
            <div className="blocParchemin">
                <img src={parchemin} alt="parchemin" className="parchemin"></img>
                <p className="texteTrouba">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
        </div>
    )
}

export default Troubadour;