import React, { Component } from 'react';
import HeaderSection from '../component/header';
import Form from '../component/form';
import Ticker from 'react-ticker'

const list = ["Noviziato sorella Ilaria", "Ritiro Laici 2020", "Festa della Madonna del Carmelo", "Ritiro giovani", "Lavori in corso"];

function rand(min, max) {
  var offset = min
  var range = (max - min) + 1
  var randomNumber = Math.floor(Math.random() * range) + offset
  return randomNumber
}

class Proposta extends Component {


  render(){
    return (
      <React.Fragment>
        <HeaderSection title="La nostra proposta" description="Che il buon Dio ti benedica e ti dia pace e bene!" bg="bg5" />
        <div className="container pt-3 pb-3 mb-4">
          <div className="row shadow mb-4 p-3">
            <div className="col-12 mx-auto">
            <h3 className="text-center title-underline mb-3 mt-3">News</h3>
                <Ticker offset="60%" mode="smooth">
                  {() => (
                    <>
                      {
                        <h4 className="ticker-text"> <i className="far fa-bell"></i>&nbsp; {list[rand(0, list.length - 1)]}</h4>
                      }
                        
                    </>
                )}
                </Ticker>
              </div>
          </div>

          <div className="row mb-4 shadow-lg p-3" >
              <div className="col-lg-8 col-md-12 col-xl-6 ">
                <h3 className="text-center title-color mb-4">Per coloro che vogliono capire meglio</h3>
                <p>
                Caro fratello che cerchi, cara sorella che ti interroghi, noi missionari e missionarie offriamo la possibilità di accompagnare spiritualmente quanti sono in ricerca vocazionale, cercando di discernere per ciascuno il percorso migliore.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 col-xl-6  ">
                <h3 className="text-center title-color mb-4">Se volessi saperne di più, contattaci!</h3>
                  <Form/>
              </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default Proposta;