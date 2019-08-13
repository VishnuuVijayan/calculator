import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/clearButton';
import Operators from './components/Operator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }


  addToInput = val =>{
    this.setState({ input : this.state.input + val});
  };

  addDecimal = val =>{
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val});
    }
  }
  
  addZeroToInput = val =>{
    if(this.state.input !== ""){
      this.setState({ input : this.state.input + val});
    }
  }

  add = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "plus";
  }

  subtract = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "subtract";
  }

  multiply = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "multiply";
  }

  divide = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "divide";
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)});
    }
    if (this.state.operator === "subtract") {
      this.setState({input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)});
    }
    if (this.state.operator === "multiply") {
      this.setState({input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)});
    }
    if (this.state.operator === "divide") {
      this.setState({input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)});
    }
  }

  clearInput = () =>{
    this.setState({input : ""})
  }
  render() { 
    return ( 
      <div className="App">
        <div className = "calc-wrapper">
            <div className = "row">
              <Input>{this.state.input}</Input>
            </div>
            <div className = "row">
              <Button handleClick = {this.addToInput}>7</Button>
              <Button handleClick = {this.addToInput}>8</Button>
              <Button handleClick = {this.addToInput}>9</Button>
              <Operators handleClick = {this.divide}>/</Operators>
            </div>
            <div className = "row">
                <Button handleClick = {this.addToInput}>4</Button>
                <Button handleClick = {this.addToInput}>5</Button>
                <Button handleClick = {this.addToInput}>6</Button>
                <Operators handleClick = {this.multiply}>*</Operators>
            </div>
            <div className = "row">
              <Button handleClick = {this.addToInput}>1</Button>
              <Button handleClick = {this.addToInput}>2</Button>
              <Button handleClick = {this.addToInput}>3</Button>
              <Operators handleClick = {this.subtract}>-</Operators>
            </div>
            <div className = "row">
              <Button handleClick = {this.addDecimal}>.</Button>
              <Button handleClick = {this.addZeroToInput}>0</Button>
              <Button handleClick = {this.evaluate}>=</Button>
              <Operators handleClick = {this.add}>+</Operators>
            </div>
            <div className = "row">
                <ClearButton handleClear = {this.clearInput}>Clear</ClearButton>
            </div>
          </div>
      </div>
    );
  }
}
 
export default App;

// export default App;
