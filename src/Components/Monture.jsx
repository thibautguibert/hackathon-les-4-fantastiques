import React from 'react';
import { NavLink } from 'react-router-dom';
import Dragon from '../Images/dragon.png';
import Cheval from '../Images/cheval.png';
import Pied from '../Images/pied.png';
import Fumant from '../Images/fumant.png';
import Parchemin from '../Images/parchemin.png';
import './Monture.css';
import Troubadour from './Troubadour';

function Monture({ handleClick }) {
  return (
    <div>
      <div className="monture">
        <h1 className="titreMonture">L'ecurie magique</h1>
        <div className="choixMonture">
          <NavLink
            className="dragonLink"
            activeClassName="active"
            to="/Itineraire"
          >
            <div className="dragon">
              <img
                className="imageDragon"
                src={Dragon}
                id="car"
                onClick={handleClick}
                alt="imageDragon"
              ></img>
              <div className="parcheminTexteD">
                <img
                  className="imageParchemin"
                  src={Parchemin}
                  id="car"
                  onClick={handleClick}
                  alt="imageParchemin"
                ></img>
                <p className="enDragon" id="car" onClick={handleClick}>
                  en dragon
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            className="piedLink"
            activeClassName="active"
            to="/Itineraire"
          >
            <div className="pied">
              <img
                className="imagePied"
                src={Pied}
                id="foot"
                onClick={handleClick}
                alt="imagePied"
              ></img>
              <div className="parcheminTexteP">
                <img
                  className="imageParchemin"
                  src={Parchemin}
                  id="foot"
                  onClick={handleClick}
                  alt="imageParchemin"
                ></img>
                <p className="aPied" id="foot" onClick={handleClick}>
                  a pied
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            className="fumantLink"
            activeClassName="active"
            to="/Itineraire"
          >
            <div className="fumant">
              <img
                className="imageFumant"
                src={Fumant}
                id="scooter"
                onClick={handleClick}
                alt="imageFumant"
              ></img>
              <div className="parcheminTexteF">
                <img
                  className="imageParchemin"
                  src={Parchemin}
                  id="scooter"
                  onClick={handleClick}
                  alt="imageParchemin"
                ></img>
                <p className="enFumant" id="scooter" onClick={handleClick}>
                  en fumant
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            className="chevalLink"
            activeClassName="active"
            to="/Itineraire"
          >
            <div className="cheval">
              <img
                className="imageCheval"
                src={Cheval}
                id="bike"
                onClick={handleClick}
                alt="imageCheval"
              ></img>
              <div className="parcheminTexteC">
                <img
                  className="imageParchemin"
                  src={Parchemin}
                  id="bike"
                  onClick={handleClick}
                  alt="imageParchemin"
                ></img>
                <p className="aCheval" id="bike" onClick={handleClick}>
                  a cheval
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <Troubadour texte="Quelle belle bête avez-vous l'habitude de monter? Et je ne parle pas de Cunégonde" />
    </div>
  );
}

export default Monture;
