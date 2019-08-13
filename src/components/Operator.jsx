import React, { Component } from 'react';
import './Button.css';

class Operators extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="operator"
            onClick={() => this.props.handleClick(this.props.children)}
            >
                {this.props.children}
            </div>
         );
    }
}
 
export default Operators;