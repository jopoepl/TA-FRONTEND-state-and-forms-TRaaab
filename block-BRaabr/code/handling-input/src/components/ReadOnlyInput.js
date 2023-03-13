import React from 'react'

class ReadOnlyInput extends React.Component{
    constructor(props){
        super(props)

    }
   render(){
    return    (

        <form onSubmit={this.props.onSubmit} >
        <label htmlFor="ReadOnlyInput">ReadOnly Input</label>
        <input onChange={this.props.onChange} value={this.props.value} id="ReadOnly" disabled type="text"/>
        <input value="Submit"  type="submit" />
        </form>
       )

   }

}

export default ReadOnlyInput;