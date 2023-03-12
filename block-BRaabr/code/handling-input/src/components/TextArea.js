import React from 'react'

class TextAreaInput extends React.Component{
    constructor(props){
        super(props)

    }
   render(){
    return    (
        <form onSubmit={this.props.onSubmit} >
        <label htmlFor="TextArea">TextArea Input</label>
        <textarea disabled={this.props.disabled }onChange={this.props.onChange} placeholder={this.props.value} id="textarea"/>
        <input value="Submit"  type="submit" />
        </form>
       )

   }

}

export default TextAreaInput;