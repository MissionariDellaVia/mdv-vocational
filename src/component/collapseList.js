import React, { Component } from 'react';
import '../assets/css/collapseList.css'

class CollapseList extends Component {

    constructor(props){
        super(props);
        this.createFaq = this.createFaq.bind(this);
    }
        
    createFaq = function(){
        var faq = this.props.data; 
        return faq.map((item) => {
            return (
                <React.Fragment>
                <div  key={item.id} className="faq hoverable" data-toggle="collapse" data-target={"#" + item.collapseID }  aria-expanded="true" aria-controls={item.collapseID}>
                        <h4><i className="fas fa-plus fa-xs"></i>&nbsp; {item.title} </h4>
                </div>

                <div id={item.collapseID } className="collapse" data-parent="#accordionExample">
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                </React.Fragment>
            )
        })
    }
    
  
    render(){
      return (
          <React.Fragment>
              <div className="accordion" id="accordionExample">
                    {this.createFaq()}
              </div>
          </React.Fragment>
      );
    }
}

export default CollapseList;