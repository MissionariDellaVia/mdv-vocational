import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import VocazioniMD from '../data/vocazioni-santita.md';
import VocazioniMD2 from '../data/vocazioni-santita2.md';
import VocazioniMD3 from '../data/vocazioni-santita3.md';


class VocazioniFamose extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
        <React.Fragment>
            <HeaderSection title="Vocazioni famose" description="Qui di seguito troverete delle piccole testimonianze alcuni religiosi e religiose e di come hanno maturato la loro vocazione" author="" bg="bg12" />

            <div className="container shadow-lg pt-3 pb-3 mb-4">
            <div className="accordion" id="accordionSection-vfs">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-vfs1" aria-expanded="true" aria-controls="collapse-s1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Padre Pio da Pietralcina </h3>
                </div>
                <div className="collapse show" id="collapse-vfs1" data-parent="#accordionSection-vfs">
                    <MarkdownRender mdFile={VocazioniMD}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-vfs2" aria-expanded="true" aria-controls="collapse-vfs2">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;S. Ignazio di Loyola </h3>
                </div>
                <div className="collapse" id="collapse-vfs2" data-parent="#accordionSection-vfs">
                    <MarkdownRender mdFile={VocazioniMD2}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-vfs3" aria-expanded="true" aria-controls="collapse-vfs3">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Madre Teresa di Calcutta </h3>
                </div>
                <div className="collapse" id="collapse-vfs3" data-parent="#accordionSection-vfs">
                    <MarkdownRender mdFile={VocazioniMD3}></MarkdownRender>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
  }
}

export default VocazioniFamose;