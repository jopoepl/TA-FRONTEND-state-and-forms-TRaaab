import logo from './logo.svg';
import './App.css';
// import Button from './components/Button'
import React from 'react'

class App extends React.Component {
  constructor(props){
      super(props);
      this.handleImg = this.handleImg.bind(this)
      this.state = {
          url: process.env.PUBLIC_URL + `/assets/basketball.jpg`,
          alt: ""
      }
  }

  handleImg = (event) => {
    console.log("this props", `/Users/joel/Library/Mobile Documents/com~apple~CloudDocs/Documents/Documents – Joel’s MacBook Pro/coding/TA-FRONTEND-state-and-forms-TRaaab/block-BRaabd/assets/${event.target.innerText}`)
    this.setState({
      url: process.env.PUBLIC_URL + `/assets/${event.target.innerText}.jpg`,
      alt: event.target.innerText
    })
  }

  render(){
      return (
        <div className='App-cont'>
          <div className="Button-cont">
              <button onClick={this.handleImg} >basketball</button>
              <button onClick={this.handleImg}>Pubg</button>
              <button onClick={this.handleImg}>Tiger</button>
              <button onClick={this.handleImg}>Cricket</button>
              <button onClick={this.handleImg}>Laptop</button>
              <button onClick={this.handleImg}>Phone</button>
          </div>
          <img src={this.state.url} alt={this.state.alt}></img>
        </div>
          )
  }

 
}

export default App;
