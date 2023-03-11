// import logo from './logo.svg';
import './App.css';
import React from  'react'
import FontCard from './FontCard';
import googleFonts from './googleFonts'

let allFonts = Object.keys(googleFonts)
console.log(allFonts, "allfonts")

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: "",
      size: 10,
    }

  }


  handleText = (event) => {
    this.setState({
      text: event.target.value,
    })
  }
  handleSize = (event) => {
    this.setState({
      size: +event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <h1>FONT SELECTOR</h1>
      <div className='input-cont'>
        <input placeholder='Type Something' onChange={this.handleText} value = {this.state.text} type="text"/>
        <input onChange = {this.handleSize} value = {this.state.size} type="range"/>
      </div>
      <ul className='font-cont'>
     {
      allFonts.map(font => {
        let myStyle = {
          fontFamily: font,
          fontSize: this.state.size
        }
        return (
            <FontCard style={myStyle} className="font-card" fontName = {font} type = {font.category} fontText = {this.state.text}/>
          
        )
      })

     }
      </ul>
       

  
      </div>
    );
  }
  
}

export default App;
