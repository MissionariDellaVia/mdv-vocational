import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from 'react-scroll-up';

import Home from './Home';
import HomeCard from './HomeCard';
import Vocazione from './Vocazione';
import VitaConsacrata from './VitaConsacrata';
import Discernimento from './Discernimento';
import Domande from './Domande';
import Matrimonio from './Matrimonio';
import Proposte from './Proposte';
import Sacerdozio from './Sacerdozio';
import Messaggi from './Messaggi';
import Testimonianze from './Testimonianze';
import Materiale from './Materiale';
import VocazioniFamoseMatrimonio from './VocazioniFamoseMatrimonio';
import TestimonianzeMatrimonio from './TestimonianzeMatrimonio';
import VocazioniFamose from './VocazioniFamose';
class Main extends Component {
  
  render(){
    return (
        <main>
          <Route render={({ location }) => (
              <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={10}>
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/cards" exact component={HomeCard} />
                  <Route path="/vocazione" component={Vocazione} />
                  <Route path="/vita-consacrata" component={VitaConsacrata} />
                  <Route path="/discernimento-vocazionale" component={Discernimento} />
                  <Route path="/testimonianze" component={Testimonianze} />
                  <Route path="/domande" component={Domande} />
                  <Route path="/matrimonio" component={Matrimonio} />
                  <Route path="/proposta" component={Proposte} />
                  <Route path="/messaggi-vocazionali" component={Messaggi} />
                  <Route path="/vocazione-sacerdozio" component={Sacerdozio} />
                  <Route path="/materiale-scaricabile" component={Materiale} />
                  <Route path="/vocazioni-famose-matrimonio" component={VocazioniFamoseMatrimonio} />
                  <Route path="/testimonianze-matrimonio" component={TestimonianzeMatrimonio} />
                  <Route path="/vocazioni-famose" component={VocazioniFamose} />                  
                </Switch>
              </CSSTransition>
              </TransitionGroup>
            )}
          />
          <ScrollToTop showUnder={160}>
            <i className="far fa-arrow-alt-circle-up fa-2x scrollTop"></i>
          </ScrollToTop>
        </main>
    );
  }
}

export default Main;