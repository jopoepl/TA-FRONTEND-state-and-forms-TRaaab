import React from 'react'



class QuestionBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: false,
        }
    }

    handleClick = () => {
        this.setState({
            selected: !this.state.selected,
        })
    }


    render(){
        const QuestionElement = () => {
            return (
                <h2 onClick={this.handleClick}>{this.props.question}</h2>
            )
        }
        
        const AnswerElement = () => {
            if(this.state.selected){
                return <p className='answer'>{this.props.answer}</p>
            } else {
                return null
            }
        }
        return(
            <>
            <QuestionElement/>
            <AnswerElement/>
            </>
        )
    }
}

     


export default QuestionBox;