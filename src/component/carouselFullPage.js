import React from 'react';
import '../assets/css/carouselSection.css';
import { Link } from 'react-router-dom';


export default function carouselSection() {

    return(
        <div className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item one active" data-interval="1000">
                    <div className="carousel-caption d-md-block" >
                    <h1 className="carousel-font">VOCAZIONE</h1>
                    <h2 className="carousel-font mb3">Alla ricerca di un grande tesoro</h2>
                    <div className="carousel-citation">
                        "Ogni essere creato ha un senso che gli è proprio, 
                        un senso che è la sua particolare
                        maniera d’essere a immagine dell’essenza divina"<br/>
                        S. Teresa Benedetta della Croce 
                    </div>
                    <Link to="/cards" className="btn btn-animated draw-border mt-4" >ENTRA</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}