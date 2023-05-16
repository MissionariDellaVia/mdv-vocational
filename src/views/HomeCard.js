import React, { Component } from 'react';
import CardFlipLink from '../component/cardFlipLink';
import { Link } from 'react-router-dom';

import '../assets/css/home.css';

import VD from '../assets/img/card-vd.jpg'
import M from '../assets/img/card-m.jpg'
import S from '../assets/img/card-s.jpg'
import MV from '../assets/img/card-mv.jpg'
import D from '../assets/img/card-d.jpg'
import NP from '../assets/img/card-np.jpg'

class Home extends Component {
  render(){
    return (
        <React.Fragment>
            <div className="homeCard d-flex align-items-center">
                <div className="container mt-5 ">
                  <div className="row mb-4">
                  <div className="mx-auto mb-4 ">
                      <Link to="/" className="btn btn-animated draw-border mx-auto" >TORNA INDIETRO</Link>
                  </div>
                    
                  </div>
                  <div className="row smalled mb-4">
                      <div className="col-xl-4 col-md-6 col-12 mb-4 ">
                        <CardFlipLink 
                          title="Vocazione e discernimento" 
                          img={VD} 
                          titleLink="La Vocazione" 
                          toLink1="vocazione"
                          backText1="La vita è vocazione "
                          backText2="Chiamati perché amati"
                          backText3="Discernere bene per vivere bene"
                          backText4="Fare un buon cammino di discernimento"
                          titleLink2="Il Discernimento Vocazionale"
                          toLink2="discernimento-vocazionale"
                          ></CardFlipLink>
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 mb-4">
                        <CardFlipLink 
                          title="Il Matrimonio" 
                          img={M}
                          titleLink="Il Matrimonio" 
                          toLink1="matrimonio"
                          backText1="Il senso della vocazione al matrimonio  "
                          backText2="Segni di vocazione "
                          backText3="Testimonianze di sposi cristiani"
                          backText4="Esempi di santità matrimoniale"
                        ></CardFlipLink>
                      </div>
                      <div className="col-xl-4 col-md-12 col-12 mb-4">
                        <CardFlipLink
                          title="Sacerdozio e vita consacrata" 
                          img={S}
                          titleLink="La Vocazione al Sacerdozio" 
                          toLink1="vocazione-sacerdozio"
                          backText1="l senso della vocazione al sacerdozio  "
                          backText2="Segni di vocazione "
                          backText3="l senso della vocazione alla vita consacrata"
                          backText4="Segni di vocazione"
                          titleLink2="La Vocazione alla vita consacrata"
                          toLink2="vita-consacrata"
                        ></CardFlipLink>
                      </div>
                  </div>
                  <div className="row smalled mb-4">
                      <div className="col-xl-4 col-md-6 col-12 mb-4">
                        <CardFlipLink 
                          title="Messaggi vocazionali" 
                          img={MV}
                          titleLink="Messaggi vocazionali" 
                          toLink1="messaggi-vocazionali"
                          backText1="Rispondere all’amore si può! "
                          backText2="Il più piccolo di tutti i semi"
                        ></CardFlipLink>
                      </div>
                      <div className="col-xl-4 col-md-6 col-12 mb-4">
                        <CardFlipLink 
                          title="Le vostre domande" 
                          img={D}
                          titleLink="Le vostre domande " 
                          toLink1="domande"
                          backText1="Un giovane che sente la chiamata ma trova forti ostacoli in famiglia come deve comportarsi? "
                          backText2="Un età adulta può rappresentare un ostacolo per la vocazione alla vita consacrata?"
                        ></CardFlipLink>
                      </div>
                      <div className="col-xl-4 col-md-12 col-12 mb-4">
                        <CardFlipLink 
                          title="La nostra proposta"
                          img={NP}
                          titleLink="La nostra proposta" 
                          toLink1="proposta"
                          backText1="Per coloro che vogliono capire meglio"
                          backText2="Per le coppie di sposi"
                        ></CardFlipLink>
                      </div>
                  </div>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default Home;