import React, { Component } from 'react';
import './clearButton.css'

class ClearButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "clear-btn"
            onClick = {() => this.props.handleClear()}
            >
                {this.props.children}
            </div>
         );
    }
}
 
export default ClearButton;