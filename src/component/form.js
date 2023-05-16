import React, {Component} from 'react';
import axios from "axios";
import '../assets/css/form.css';
import Swal from 'sweetalert2'

const API_URL = "http://vocazione.altervista.org/api/SendMail.php"

function showSwal(){
    Swal.fire({
        icon: 'success',
        title: 'Email inviata',
        showConfirmButton: false,
        timer: 1500
        })    
}

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            message: '',
            mail: '',
            error:'',
            mailSent: false
          };
        
        this.initialState = this.state;
        this.selectEmpty = '';
    }

    componentDidMount(){
    }

    handleNome = (e) => {
        e.preventDefault();
        this.setState({
            nome: e.target.value
        });
    }

    handleMessage = (e) => {
        e.preventDefault();
        this.setState({
            message: e.target.value
        });
    }

    handleMail = (e) => {
        e.preventDefault();
        this.setState({
            mail: e.target.value
        });
    }

    handleFormSubmit = (e) => {
        showSwal();
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_URL}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(result => {
            if (result.data.sent) {
                showSwal();
            }
        })
        .catch(error => this.setState({ error: error.message })
        );
    }

    render(){
        return(
            <React.Fragment>
                <form>
                    <div className="form-group col-sm-10 mx-auto">
                        <input type="email" className="form-control" id="mail" placeholder="email *" 
                        value={this.state.mail}
                        onChange={this.handleMail}
                        required/>
                    </div>
                    <div className="form-group col-sm-10  mx-auto">
                        <input type="text" className="form-control" id="nome" placeholder="nome *" 
                        value={this.state.nome}
                        onChange={this.handleNome}
                        required/>
                    </div>
                    <div className="form-group col-sm-10 mx-auto">
                        <textarea className="form-control " id="message" rows="3" placeholder="messaggio *" 
                                value={this.state.message}
                                onChange={this.handleMessage} 
                                required/>      
                    </div>
                    <div className="form-group col-sm-2 mx-auto">
                        <button className="btn btn-primary " onClick={this.handleFormSubmit} >Invia</button>
                    </div>
                </form>
                    
            </React.Fragment>
        )
    }
}