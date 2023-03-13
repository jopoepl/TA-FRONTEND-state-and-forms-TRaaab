import React from 'react'

class TextInput extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     text: ""
        // }

    }
   render(){
    return    (
        <form onSubmit={this.props.onSubmit} >
        <label htmlFor="textInput">Text Input</label>
        <input onChange={this.props.onChange} value={this.props.value} id="text" type="text"/>
        <input value="Submit"  type="submit" />
        </form>
       )

   }

}

export default TextInput;