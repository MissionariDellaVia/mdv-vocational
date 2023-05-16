import React from 'react';
import '../assets/css/headerSection.css'

export default function headerSection(props) {

    return(
        <header className={"masthead " + props.bg}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
                <h1 className="font-weight-light">{props.title}</h1>
                <p className="lead headerSection">{props.description}</p>
                <p className="lead headerSection"> {props.author}</p>
            </div>
            </div>
        </div>
        </header>
    )
}