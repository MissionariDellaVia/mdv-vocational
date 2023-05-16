import React, {Component} from 'react';
import MenuBar from './menuBar';
import Logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';


export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navBackground : "rgb(129,94,50)"
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 50 ? "rgb(129,94,50)" : "rgb(129,94,50, 0.95)";
    
          this.setState({ navBackground: backgroundcolor });
        });
    }

    render() {
        return(
            <nav className="navbar fixed-top navbar-expand-xl  navbar-light pl-5 pr-5" style={{backgroundColor : this.state.navBackground, transition: 'background-color 1s ease'}}>
                <Link className="navbar-brand" to="/">
                    <img className="img-fluid" src={Logo} alt="missionari della via"/>
                </Link>
    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MenuBar/>
                </div>
                
            </nav>
        )
    }

}