import React, { Component } from 'react';
import './Button.css'

const isOperator = (val) =>{
    return !isNaN(val) || val ==="." || val ==="=";
}

class Button extends Component {
    render() { 
        return(
        <div className={`button ${isOperator(this.props.children) ? "" : "operator"} ` } onClick={() => this.props.handleClick(this.props.children)}>
            {this.props.children}
        </div>
        );
    }
}
 
export default Button;