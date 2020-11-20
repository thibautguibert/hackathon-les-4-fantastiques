import React from 'react';
import wejdene from '../Images/troubadour-clipart-xl.png';
import parchemin from '../Images/parchemin.png';
import './Troubadour.css';

function Troubadour({ texte }) {
  return (
    <div className="display">
      <img src={wejdene} alt="troubadour" className="trouba"></img>
      <div className="blocParchemin">
        <img src={parchemin} alt="parchemin" className="parchemin"></img>
        <p className="texteTrouba">{texte}</p>
      </div>
    </div>
  );
}

export default Troubadour;
