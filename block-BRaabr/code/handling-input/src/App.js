// import logo from './logo.svg';
import './App.css';
import TextInput from './components/TestInput';
import DateInput from './components/DateInput';
import FileInput from './components/FileInput';
import React from 'react'
import ReadOnlyInput from './components/ReadOnlyInput';
import TextAreaInput from './components/TextArea';
import FormValidatiion from './components/FormValidation';

class App extends React.Component {
  constructor(props){
    super(props);
    this.fileInput =  React.createRef()
    this.state = {
      text: "",
      date: "",
      file: "",
      textarea: ""
    }
  }

  handleChange = (event) => {
    console.dir(event.target, "fileInp")

    switch (event.target.id) {
      case "text":
        this.setState({
          text: event.target.value
      })
        break;
      case "date":
        this.setState({
          date: event.target.value
      })
        
        break;
      case "file":
        this.setState({
          file: this.fileInput.current.files[0].name
        })
          
          break;
        case "textarea":
          this.setState({
            textarea: event.target.value
            })
              
              break;
    
      default:
        break;
    }

}

handleSubmit = (event) => {
  event.preventDefault()
}

  render(){
    return (
      <div className="App">
       <h1>Welcome to File Input Tester</h1>
       <TextInput  onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.text} id="text" type="text"/>
       <DateInput  onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.date} id="date" type="date"/>
       <FileInput  onChange={this.handleChange} onSubmit={this.handleSubmit} id="file" inputRef={this.fileInput} type="file"/>
       <ReadOnlyInput value="Read only input"/>
       <TextAreaInput onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.textarea} id="textarea"/>
       <TextAreaInput disabled/>
       <FormValidatiion/>

      </div>
    );
  } 
}

export default App;
