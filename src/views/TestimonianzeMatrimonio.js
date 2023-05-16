import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import TestimonianzaMD from '../data/testimonianze4.md';


class Sacerdozio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
        <React.Fragment>
            <HeaderSection title="Testimonianze" description="Qui di seguito trovate delle piccole testimonianze di sposi cristiani, di come hanno vissuto il loro fidanzamento, di alcuni religiosi e religiose e di come hanno maturato la loro vocazione." author="" bg="bg13" />

            <div className="container shadow-lg pt-3 pb-3 mb-4">
            <div className="accordion" id="accordionSection-t">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-tm1" aria-expanded="true" aria-controls="collapse-s1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Testimonianza di Mattia e Viviana </h3>
                </div>
                <div className="collapse show" id="collapse-tm1" data-parent="#accordionSection-t">
                    <MarkdownRender mdFile={TestimonianzaMD}></MarkdownRender>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
  }
}

export default Sacerdozio;