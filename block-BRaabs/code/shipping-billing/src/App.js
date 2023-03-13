import './App.css';
import ShippingInfo from './ShippingInfo'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.inputCheck = React.createRef()
    this.state = {
      address: "",
      zip: "",
      city: "",
      country: "",
      errors: {
        address: ""
      },
      copyDetails: false,

    }
  }

  copyDetails = (event) => {
    event.target.checked ? 
    this.setState({
      copyDetails: true,
    }) :     this.setState({
      copyDetails: false,
    }) ;
  }

  // HandleCopy = (event) => {
  //     return ( event.target.checked === true ?
  //       <ShippingInfo 
  //       classForAdd={this.state.errors.address ? "error": ""}
  //       errorMsg = {this.state.errors.address}
  //       className="cont"
  //       title="Shipping Info"
  //       onChange= {this.handleChange}
  //       address={this.state.address} 
  //       city={this.state.city}
  //       zip={this.state.zip}
  //       country={this.state.country}
  //       />
  //     :
  //      (<ShippingInfo
  //     onChange= {this.handleChange}
  //     checkbox="checkbox"
  //     className="cont"
  //      title="Billing Info"
  //     />)
  //     )

  // }


  handleChange = (event) => {

      switch (event.target.id) {
        case "address":
          event.target.value.length < 6 ? 
          this.setState({address: event.target.value, errors:{address:"Add can't be less than 6 charac"}}):
          this.setState({address: event.target.value,  errors:{address:""}})
          break;
        case "zip":
          this.setState({zip: event.target.value})
            break;
        case "city":
          this.setState({city: event.target.value})
            break;
        case "country":
          this.setState({country: event.target.value})
            break;
        default:
          break;
      }

    }

  //   HandleCopy = (event) => {
  //     return ( event.target.checked === true ?
  //       <ShippingInfo 
  //       classForAdd={this.state.errors.address ? "error": ""}
  //       errorMsg = {this.state.errors.address}
  //       className="cont"
  //       title="Shipping Info"
  //       onChange= {this.handleChange}
  //       address={this.state.address} 
  //       city={this.state.city}
  //       zip={this.state.zip}
  //       country={this.state.country}
  //       />
  //     :
  //       (<ShippingInfo
  //     onChange= {this.handleChange}
  //     checkbox="checkbox"
  //     className="cont"
  //       title="Billing Info"
  //     />)
  //     )

  // }


  render() {
    return (
      <div className='center'>
       <h1>Shipping & Billing Form</h1>
      <div  className="App">
       <ShippingInfo 
       classForAdd={this.state.errors.address ? "error": ""}
       errorMsg = {this.state.errors.address}
       checkbox="hidden"
       className="cont"
       title="Shipping Info"
       onChange= {this.handleChange}
       address={this.state.address} 
       city={this.state.city}
       zip={this.state.zip}
       country={this.state.country}
       />
      <ShippingInfo
            classForAdd={this.state.errors.address ? "error": ""}
            errorMsg={this.state.errors.address}
            copyDetails = {this.copyDetails}
            className="cont"
            title="Billing Info"
            onChange={this.handleChange}
            address={this.state.copyDetails ? this.state.address : ""}
            city={this.state.copyDetails ? this.state.city : ""}
            zip={this.state.copyDetails ? this.state.zip : ""}
            country={this.state.copyDetails ? this.state.country : ""}
            checkbox="checkbox" // add the checkbox prop to the billing info component
            onClick={this.copyDetails} // call the copyDetails method when the checkbox is clicked
          />

      


     
      </div>

      </div>
    );
  }
}


export default App;
