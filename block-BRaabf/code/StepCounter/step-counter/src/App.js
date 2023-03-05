import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      step: 1,
      max: Infinity
    }
  }

  handleInc = () => {
    this.setState({
      count: this.state.max > this.state.count ? this.state.count + this.state.step : this.state.count
    })
  }

  handleDec = () => {
    this.setState({
      count: this.state.count - this.state.step
    })
    
  }
  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  handleStep = (event) => {
    this.setState({
      step: +event.target.innerText
    })
  }

  handleMax = (event) => {
    this.setState({
      max: +event.target.innerText
    })
  }

  render(){
    return (
      <div className="App">
      <h1>STEP COUNTER WIP</h1>
      <div className='max-cont'> MAX VALUE
        <button onClick={this.handleMax} className="max-button">15</button>
        <button onClick={this.handleMax} className="max-button">100</button>
        <button onClick={this.handleMax} className="max-button">200</button>
      </div>
      <h2 className='count'>{this.state.count}</h2>
      <div className='step-cont'> STEP
        <button onClick={this.handleStep} className="step-button">5</button>
        <button onClick={this.handleStep} className="step-button">10</button>
        <button onClick={this.handleStep} className="step-button">15</button>
      </div>
      <div className='button-cont'>
        <button onClick={this.handleInc} className="button-operator">Increase</button>
        <button onClick={this.handleDec} className="button-operator">Decrease</button>
        <button onClick={this.handleReset} className="button-operator">Reset</button>
      </div>
     </div>
    )
   

  }

}

export default App;
