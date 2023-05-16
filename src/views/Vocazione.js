import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import VocazioneMD from '../data/vocazione.md';
import VocazioneMD2 from '../data/vocazione2.md';
import VocazioneMD3 from '../data/vocazione3.md';


class Vocazione extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <React.Fragment>
                <HeaderSection title="La vita è una Vocazione" description="Dio ha creato ogni singola persona per uno scopo, e questo scopo viene realizzato da noi. L’unica cosa che dobbiamo fare è scoprirlo" author="Card. Luis A. Tagle" bg="bg4" />
                <div className="container shadow-lg pt-3 pb-3 mb-4r">
                    <div className="accordion" id="accordionSection-v">
                        <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-v1" aria-expanded="true" aria-controls="collapse-v1">
                            <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Che Cosa E' La Vocazione? </h3>
                        </div>
                        <div className="collapse show" id="collapse-v1" data-parent="#accordionSection-v">
                            <MarkdownRender mdFile={VocazioneMD}></MarkdownRender>
                        </div>

                        <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-v2" aria-expanded="true" aria-controls="collapse-v2">
                            <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Chi Sono Io? </h3>
                        </div>
                        <div className="collapse" id="collapse-v2" data-parent="#accordionSection-v">
                            <MarkdownRender mdFile={VocazioneMD2}></MarkdownRender>
                        </div>

                        <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-v3" aria-expanded="true" aria-controls="collapse-v3">
                            <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Chiamati perché amati! </h3>
                        </div>
                        <div className="collapse" id="collapse-v3" data-parent="#accordionSection-v">
                            <MarkdownRender mdFile={VocazioneMD3}></MarkdownRender>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Vocazione;