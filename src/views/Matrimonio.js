import React, { Component } from 'react';
import HeaderSection from '../component/header';
import MarkdownRender from '../component/markerComponent';
import MatrimonioMD from '../data/matrimonio.md';
import MatrimonioMD2 from '../data/matrimonio2.md';
import MatrimonioMD3 from '../data/matrimonio3.md';
import MatrimonioMD4 from '../data/matrimonio4.md';


class Matrimonio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <React.Fragment>
        <HeaderSection title="Il senso della vocazione al matrimonio" description="Quando Dio ha creato il genere umano, ha plasmato una famiglia; quando il Verbo di Dio è venuto in terra, ha voluto nascere in una famiglia; quando Gesù ha iniziato la sua vita pubblica, stava festeggiando una nuova famiglia. Dio ha avuto talmente a cuore la famiglia, l’ha pensata come realtà di tale importanza da imprimervi la sua stessa impronta: essa, infatti, riflette la vita stessa di Dio, la vita della Santissima Trinità. E ciò è sufficiente per dire cos’è per Dio la famiglia" author="(Card C. Caffarra)" bg="bg4" />
        
        <div className="container shadow-lg pt-3 pb-3 mb-4 bg-light">
            <div className="accordion" id="accordionSection-m">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-m1" aria-expanded="true" aria-controls="collapse-m1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Il senso del Matrimonio Cristiano </h3>
                </div>
                <div className="collapse show" id="collapse-m1" data-parent="#accordionSection-m">
                    <MarkdownRender mdFile={MatrimonioMD}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-m2" aria-expanded="true" aria-controls="collapse-m2">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Segni di vocazione </h3>
                </div>
                <div className="collapse" id="collapse-m2" data-parent="#accordionSection-m">
                    <MarkdownRender mdFile={MatrimonioMD2}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable mb-4 " data-toggle="collapse" data-target="#collapse-m3" aria-expanded="true" aria-controls="collapse-m3">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Fidanzamento, tempo di discernimento </h3>
                </div>
                <div className="collapse" id="collapse-m3" data-parent="#accordionSection-m">
                    <MarkdownRender mdFile={MatrimonioMD3}></MarkdownRender>
                </div>

                <div className="collapseHeader hoverable " data-toggle="collapse" data-target="#collapse-m4" aria-expanded="true" aria-controls="collapse-m4">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Condizioni necessarie per un matrimonio cristiano </h3>
                </div>
                <div className="collapse" id="collapse-m4" data-parent="#accordionSection-m">
                    <MarkdownRender mdFile={MatrimonioMD4}></MarkdownRender>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Matrimonio;