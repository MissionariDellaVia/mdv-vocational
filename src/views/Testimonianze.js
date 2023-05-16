import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import Testimonianza1 from '../data/testimonianze1.md';
import Testimonianza2 from '../data/testimonianze2.md';
import Testimonianza3 from '../data/testimonianze3.md';
class Testimonianze extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
        <React.Fragment>
            <HeaderSection title="Testimonianze" description="Qui di seguito trovate delle piccole testimonianze di sposi cristiani, di come hanno vissuto il loro fidanzamento, di alcuni religiosi e religiose e di come hanno maturato la loro vocazione." bg="bg10" />

            <div className="container shadow-lg pt-3 pb-3 mb-4">
            <div className="accordion" id="accordionSection-t">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-t1" aria-expanded="true" aria-controls="collapse-t1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Testimonianza di suor Stella mdv </h3>
                </div>
                <div className="collapse" id="collapse-t1" data-parent="#accordionSection-t">
                    <MarkdownRender mdFile={Testimonianza1}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-t2" aria-expanded="true" aria-controls="collapse-t2">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Testimonianza di suor Lucia mdv </h3>
                </div>
                <div className="collapse" id="collapse-t2" data-parent="#accordionSection-t">
                    <MarkdownRender mdFile={Testimonianza2}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-t3" aria-expanded="true" aria-controls="collapse-t3">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Testimonianza di sorella Ilaria mdv</h3>
                </div>
                <div className="collapse" id="collapse-t3" data-parent="#accordionSection-t">
                    <MarkdownRender mdFile={Testimonianza3}></MarkdownRender>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
  }
}

export default Testimonianze;