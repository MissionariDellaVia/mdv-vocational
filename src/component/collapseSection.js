import React, { Component } from 'react';
import '../assets/css/collapseSection.css'

class CollapseSection extends Component {

    render(){
      return (
          <React.Fragment>
            <div className="" type="button" data-toggle="collapse" data-target={"#" + this.props.collapseID } aria-expanded="true" aria-controls={this.props.collapseID}>
                <i class="fa fa-chevron-down pull-right"></i>
                {this.props.title}
            </div>
            <div class="collapse" id={this.props.collapseID}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </React.Fragment>
      );
    }
}

export default CollapseSection;