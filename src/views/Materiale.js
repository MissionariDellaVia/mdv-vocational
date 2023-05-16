import React, { Component } from 'react';
import HeaderSection from '../component/header';
import '../assets/css/materiale.css'

import PdfImage from '../assets/img/pdf-icon.png';
import RarImage from '../assets/img/rar-icon.png';


class Materiale extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
        <React.Fragment>
            <HeaderSection title="Materiale scaricabile" description="" author="" bg="bg11" />

            <div className="container shadow-lg pt-3 pb-3 mb-4">
            <div className="accordion" id="accordionSection-materiale">
                <div className="collapseHeader hoverable" data-toggle="collapse" data-target="#collapse-ms1" aria-expanded="true" aria-controls="collapse-s1">
                    <h3><i className="fas fa-plus fa-xs"></i>&nbsp;Testi sul discernimento </h3>
                </div>
                <div className="collapse show" id="collapse-ms1" data-parent="#accordionSection-materiale">
                    <p className="p-4 text-justify">A seguire troverete degli scritti interessanti circa il discernimento vocazionale che potete liberamente consultare e scaricare:</p>

                    <div className="row p-3 mb-2">
                        <div className="col-2 text-center">
                            <a href="http://vocazione.altervista.org/pdf/Udienze_di_papa_Francesco_sul_discernimento.rar" target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid" alt="download rar" src={RarImage} ></img></a>
                        </div>
                        <div className="col-10">
                            <h5>Il discernimento spirituale (Udienze di papa Francesco)</h5>
                            Preziose catechesi del papa che spiegano le basi e i criteri fondamentali del discernimento spirituale.
                        </div>
                    </div>

                    <div className="row p-3 mb-2">
                        <div className="col-2 text-center">
                            <a href="http://vocazione.altervista.org/pdf/La_vita_come_vocazione__Moys__s_Louro_de_Azevedo_Filho_.pdf" target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid" alt="download pdf" src={PdfImage} ></img></a>
                        </div>
                        <div className="col-10">
                            <h5>La vita come vocazione (Moysés Louro de Azevedo Filho) </h5>
                            Bella riflessione che analizza la diverse vocazioni: la chiamata alla vita, alla fede e ai diversi stati di vita.
                        </div>
                    </div>

                    <div className="row p-3 mb-2">
                        <div className="col-2 text-center">
                            <a href="http://vocazione.altervista.org/pdf/La_vita_come_vocazione__Moys__s_Louro_de_Azevedo_Filho_.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" alt="download pdf" src={PdfImage} ></img></a>
                        </div>
                        <div className="col-10">
                            <h5>La vita come vocazione (Moysés Louro de Azevedo Filho) </h5>
                            Bella riflessione che analizza la diverse vocazioni: la chiamata alla vita, alla fede e ai diversi stati di vita.
                        </div>
                    </div>

                    <div className="row p-3 mb-2">
                        <div className="col-2 text-center">
                        <a href="http://vocazione.altervista.org/pdf/La_vocazione_e_il_discernimento__papa_Francesco_-_Christus_Vivit_8-9_.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" alt="download pdf" src={PdfImage} ></img></a>
                        </div>
                        <div className="col-10">
                        <h5>La vocazione e il discernimento (papa Francesco - Christus Vivit 8-9)</h5>
                            Due capitoli estratti dall’Esortazione apostolica Christus Vivit di papa Francesco, destinata ai giovani, dove offre interessanti spunti sulla vocazione e sul discernimento
                        </div>
                    </div>
                    <div className="row p-3 mb-2">
                        <div className="col-2 text-center">
                        <a href="http://vocazione.altervista.org/pdf/Criteri_per_il_discernimento_vocazionale.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" alt="download pdf" src={PdfImage} ></img></a>
                        </div>
                        <div className="col-10">
                        <h5>Criteri per il discernimento vocazionale </h5>
                            Questo file offre dei semplici e basilari criteri per discernere la vita consacrata o il matrimonio
                        </div>
                    </div>
                    <div className="row p-3 mb-2">
                        <div className="col-2 text-center">
                        <a href="http://vocazione.altervista.org/pdf/La_scelta_della_professione__SantAlberto_Hurtado_.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" alt="download pdf" src={PdfImage} ></img></a>
                        </div>
                        <div className="col-10">
                        <h5>La scelta della professione (SantAlberto Hurtado) </h5>
                            Interessante scritto di Sant’Alberto che all’inizio offre interessanti spunti per discernere cosa fare nella vita, soffermandosi poi sulla vocazione al sacerdozio
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
  }
}

export default Materiale;
