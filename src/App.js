import React, { Component } from 'react';
import Navbar from './component/navbar'
import Main from './views/Main'
import Footer from './component/footer'

class App extends Component {
  render(){
    return (
      <div >
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
