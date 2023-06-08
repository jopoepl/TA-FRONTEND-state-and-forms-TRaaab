import logo from './logo.svg';
import './App.css';
import data from  './data.json'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Cart from './components/Cart'
import React from 'react'
const {products} = data
 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedSizes: []
  }
  }

  handleSizesBy = (event) => {
    let selectedSizes = this.state.selectedSizes
    let currentSize = event.target.innerHTML;
    selectedSizes.includes(currentSize) ? selectedSizes.pop(currentSize) :  selectedSizes.push(currentSize)
    this.setState({selectedSizes: selectedSizes});
}


  render(){
    return (
      <div className="App flex justify-center padding start">
        <Sidebar products={products} handleSizesBy={this.handleSizesBy}  sizes={this.state.selectedSizes} />
        <Main products={products} sizes={this.state.selectedSizes} />
        <Cart/>
      </div>
    );

  }

}

export default App;
