import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import VocazioneMD1 from '../data/vocazioni-matrimonio.md';
import VocazioneMD2 from '../data/vocazioni-matrimonio2.md';
import VocazioneMD3 from '../data/vocazioni-matrimonio3.md';


class VocazioniFamoseMatrimonio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
        <React.Fragment>
            <HeaderSection title="Esempi di santità matrimoniale" description="Qui sotto trovate delle piccole biografie di persone sposate che la Chiesa ci propone come modello per quanti sono chiamati alla vita matrimoniale, che hanno raggiunto nel loro stato e nella loro misura la beatificazione e la santità." author="" bg="bg12" />

            <div className="container shadow-lg pt-3 pb-3 mb-4">
            <div className="accordion" id="accordionSection-vfm">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-vfm1" aria-expanded="true" aria-controls="collapse-s1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Santi Luigi Martin e Zelia Guerin (genitori di S. Teresa di Lisieux) </h3>
                </div>
                <div className="collapse show" id="collapse-vfm1" data-parent="#accordionSection-vfm">
                    <MarkdownRender mdFile={VocazioneMD1}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-vfm2" aria-expanded="true" aria-controls="collapse-s2">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Beati Luigi e Maria Beltrame Quattrocchi </h3>
                </div>
                <div className="collapse" id="collapse-vfm2" data-parent="#accordionSection-vfm">
                    <MarkdownRender mdFile={VocazioneMD2}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-vfm3" aria-expanded="true" aria-controls="collapse-s3">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Santa Gianna Beretta Molla </h3>
                </div>
                <div className="collapse" id="collapse-vfm3" data-parent="#accordionSection-vfm">
                    <MarkdownRender mdFile={VocazioneMD3}></MarkdownRender>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
  }
}

export default VocazioniFamoseMatrimonio;