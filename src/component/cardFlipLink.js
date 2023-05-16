import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';


class CardFlipLink extends Component {

    constructor() {
        super();
        this.state = {
        isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    render(){
        return (
            <React.Fragment>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className="card shadow-lg" >
                    <img className="card-img-top " src={this.props.img} alt="asd" onClick={this.handleClick}/>
                    <div className="card-body">
                        <h5 className="card-text text-center">{this.props.title}</h5>
                    </div>
                </div>
                <div className="card shadow-lg" >
                    <i className="fas fa-undo fa-md undo mx-auto mt-2" onClick={this.handleClick}></i>
                    <div className="card-body text-center">
                        <Link to={"/" + this.props.toLink1}><h4 className="card-text large">{this.props.titleLink}</h4></Link>
                        <span className="card-text small">{this.props.backText1}</span><br/>
                        <span className="card-text small">{this.props.backText2}</span>
                        <Link to={"/" + this.props.toLink2}><h4 className="card-text large ">{this.props.titleLink2}</h4></Link>
                        <span className="card-text small">{this.props.backText3}</span><br/>
                        <span className="card-text small">{this.props.backText4}</span>
                    </div>
                </div>
                </ReactCardFlip>
            </React.Fragment>
        );
    }
}

export default CardFlipLink;