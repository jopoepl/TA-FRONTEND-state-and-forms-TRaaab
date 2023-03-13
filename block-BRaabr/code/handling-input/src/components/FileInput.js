import React from 'react'

class FileInput extends React.Component{
    constructor(props){
        super(props)

    }


   render(){

    return    (
        <form onSubmit={this.props.onSubmit}>
        <label htmlFor="FileInput">File Input</label>
        <input onChange={this.props.onChange} id="file" ref={this.props.inputRef} type="file"/>
        <input type="submit" value="Submit"/>
        </form>
       )

   }
}


export default FileInput;