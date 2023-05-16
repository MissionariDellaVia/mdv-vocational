import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import MessaggiMD from '../data/messaggi.md';
import MessaggiMD2 from '../data/messaggi2.md';

class Messaggi extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <React.Fragment>
        <HeaderSection title="I Messaggi Vocazionali" bg="bg6" />
        <div className="container shadow-lg pt-3 pb-3 mb-4">
          <div className="accordion" id="accordionSection-mv">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-mv1" aria-expanded="true" aria-controls="collapse-mv1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Rispondere all'amore si può! </h3>
                </div>
                <div className="collapse show" id="collapse-mv1" data-parent="#accordionSection-mv">
                    <MarkdownRender mdFile={MessaggiMD}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-mv2" aria-expanded="true" aria-controls="collapse-mv2">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Il piu’ piccolo di tutti i semi </h3>
                </div>
                <div className="collapse" id="collapse-mv2" data-parent="#accordionSection-mv">
                    <MarkdownRender mdFile={MessaggiMD2}></MarkdownRender>
                </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Messaggi;