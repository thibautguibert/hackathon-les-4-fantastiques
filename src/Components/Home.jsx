import React from 'react';
import './Home.css';
import Troubadour from './Troubadour';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="home">
            <div className="title">La Mappe-Monde Magique</div>
            <div className="texte1">Celle qui te dit ou que c'est que tu dois aller pour sauver Cunégonde</div>
                <Link to="/Monture"><div className="Button"><button className="texteButton">Choisir ma monture !</button></div></Link> 
            <div>
                <Troubadour />
            </div>
        </div>
    )
}
export default Home;