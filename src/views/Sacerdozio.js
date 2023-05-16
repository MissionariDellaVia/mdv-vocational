import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import SacerdozioMD from '../data/sacerdozio.md';
import SacerdozioMD2 from '../data/sacerdozio2.md';
import SacerdozioMD3 from '../data/sacerdozio3.md';


class Sacerdozio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
        <React.Fragment>
            <HeaderSection title="La Vocazione al Sacerdozio" description="Il Sacerdozio è l'amore del cuore di Gesù" author="Santo Curato d’Ars" bg="bg7" />

            <div className="container shadow-lg pt-3 pb-3 mb-4">
            <div className="accordion" id="accordionSection-s">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-s1" aria-expanded="true" aria-controls="collapse-s1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Il senso della vocazione al sacerdozio </h3>
                </div>
                <div className="collapse show" id="collapse-s1" data-parent="#accordionSection-s">
                    <MarkdownRender mdFile={SacerdozioMD}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-s2" aria-expanded="true" aria-controls="collapse-s2">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Segni di vocazione </h3>
                </div>
                <div className="collapse" id="collapse-s2" data-parent="#accordionSection-s">
                    <MarkdownRender mdFile={SacerdozioMD2}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-s3" aria-expanded="true" aria-controls="collapse-s3">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Le qualità </h3>
                </div>
                <div className="collapse" id="collapse-s3" data-parent="#accordionSection-s">
                    <MarkdownRender mdFile={SacerdozioMD3}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-s4" aria-expanded="true" aria-controls="collapse-s4">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Testimonianze di sacerdoti </h3>
                </div>
                <div className="collapse" id="collapse-s4" data-parent="#accordionSection-s">
                    <a href="http://www.reginamundi.info/sacerdoti/"> Storie di santi sacerdoti </a>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
  }
}

export default Sacerdozio;