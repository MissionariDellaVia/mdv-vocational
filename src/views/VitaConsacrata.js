import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import VitaConsacrataMD from '../data/vita-consacrata.md';
import VitaConsacrataMD2 from '../data/vita-consacrata2.md';
import VitaConsacrataMD3 from '../data/vita-consacrata3.md';

class VitaConsacrata extends Component {

    constructor() {
        super();
            this.state = {
            isFlipped: false
            };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    render(){
        return (
            <React.Fragment>
                <HeaderSection title="La Vocazione alla vita consacrata" bg="bg1" />

                <div className="container shadow-lg pt-3 pb-3 mb-4">
                    <div className="accordion" id="accordionSection">
                            <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#vitaConsacrataCollapse1" aria-expanded="true" aria-controls="vitaConsacrataCollapse1">
                                <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Il senso della vocazione alla vita consacrata </h3>
                            </div>
                            <div className="collapse show" id="vitaConsacrataCollapse1" data-parent="#accordionSection">
                                <MarkdownRender mdFile={VitaConsacrataMD}></MarkdownRender>
                            </div>

                            <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#vitaConsacrataCollapse2" aria-expanded="true" aria-controls="vitaConsacrataCollapse2">
                                <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Segni di vocazione </h3>
                            </div>
                            <div className="collapse" id="vitaConsacrataCollapse2" data-parent="#accordionSection">
                                <MarkdownRender mdFile={VitaConsacrataMD2}></MarkdownRender>
                            </div>

                            <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#vitaConsacrataCollapse3" aria-expanded="true" aria-controls="vitaConsacrataCollapse3">
                                <h3 ><i className="fas fa-plus fa-xs"></i>&nbsp;Qualità della persona </h3>
                            </div>
                            <div className="collapse " id="vitaConsacrataCollapse3" data-parent="#accordionSection">
                                <MarkdownRender mdFile={VitaConsacrataMD3}></MarkdownRender>
                            </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default VitaConsacrata;