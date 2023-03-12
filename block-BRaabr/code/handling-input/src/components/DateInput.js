import React from 'react'

class DateInput extends React.Component{
    constructor(props){
        super(props)

    }
   render(){
    return    (

        <form onSubmit={this.props.onSubmit} >
        <label htmlFor="DateInput">Date Input</label>
        <input onChange={this.props.onChange} value={this.props.value} id="date" type="date"/>
        <input value="Submit"  type="submit" />
        </form>
       )

   }

}

export default DateInput;