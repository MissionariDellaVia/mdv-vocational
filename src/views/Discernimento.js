import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import DiscernimentoMD from '../data/discernimento.md';
import DiscernimentoMD2 from '../data/discernimento2.md';

class Discernimento extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <React.Fragment>
        <HeaderSection title="Il Discernimento Vocazionale" description="Per scoprire il progetto di vita che può rendervi pienamente felici, mettetevi in ascolto di Dio, che ha un suo disegno di amore su ciascuno di voi." author="Messaggio del Santo Padre Benedetto XVI per la XXV GMG – 28 marzo 2010" bg="bg8" />
        
        <div className="container shadow-lg pt-3 pb-3 mb-4">
        <div className="accordion" id="accordionSection-d">
              <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-d1" aria-expanded="true" aria-controls="collapse-d1">
                  <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Discernere bene per vivere bene </h3>
              </div>
              <div className="collapse show" id="collapse-d1" data-parent="#accordionSection-d">
                  <MarkdownRender mdFile={DiscernimentoMD}></MarkdownRender>
              </div>

              <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-d2" aria-expanded="true" aria-controls="collapse-d2">
                  <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Sei punti fare un buon cammino di discernimento </h3>
              </div>
              <div className="collapse" id="collapse-d2" data-parent="#accordionSection-d">
                  <MarkdownRender mdFile={DiscernimentoMD2}></MarkdownRender>
              </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Discernimento;