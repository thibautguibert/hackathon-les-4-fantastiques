import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Troubadour from './Troubadour';

function Home() {
  return (
    <div className="home">
      <div className="Philippe">
        <div className="title">La Mappe-Monde Magique</div>
        <div className="texte1">
          Celle qui te dit ou que c'est que tu dois aller pour sauver Cunégonde
        </div>
        <Link to="/Monture">
          <div className="Button">
            <button type="button" className="texteButton">
              Choisir ma monture !
            </button>
          </div>
        </Link>
      </div>
      <Troubadour texte="Bienvenue Messire dans ta quête pour sauver la brave Cunégonde. La mappe-monde te dira comment aller d'un point A à un point B" />
    </div>
  );
}
export default Home;
