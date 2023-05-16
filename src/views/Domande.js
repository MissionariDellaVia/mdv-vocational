import React, { Component } from 'react';
import HeaderSection from '../component/header';
import CollapseList from '../component/collapseList';
import faqData from '../data/faq.json';

class Domande extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <React.Fragment>
        <HeaderSection title="Hai una domanda da fare o un pensiero da condividere? Scrivici" description=" Il tuo scritto e la nostra risposta verranno pubblicati in questa pagina" author="(rispettando la tua privacy)" bg="bg2" />
        <div className="container shadow-lg pt-3 pb-3 mb-4">
            <CollapseList data={faqData}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Domande;


