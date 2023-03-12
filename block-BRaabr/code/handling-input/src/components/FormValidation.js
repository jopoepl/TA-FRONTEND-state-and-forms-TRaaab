import React from 'react'

class FormValidatiion extends React.Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password:"",
            errors: {

            }
        }
    }

    validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
    handleChange = ({ target }) => {
        let errors = this.state.errors
        let {name, value} = target
        switch (name) {
            case "username":
                errors.email = this.validateEmail(value) ? "" : "Email is not valid"
                break;
            case "password":
                errors.password = value.length < 6 ? "Passowrd should be more than 6 charac" : ""
                break;
            default:
                break;
        }
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Your email and pass are" + " " + this.state.username + " " + this.state.password)
    }


    render(){
        return (
            <form class="App" onSubmit={this.handleSubmit}>
                <input className={this.state.errors.email ? "error" : ""} onChange={this.handleChange} type="text" placeholder= "Your username" name="username" id='username' value={this.state.username}/>
                <span>{this.state.errors.email}</span>
                <input  className={this.state.errors.password ? "error" : ""} onChange={this.handleChange} type="password" placeholder="Your password" name="password" id='password' value={this.state.password}/>
                <span>{this.state.errors.password}</span>
                <input type="Submit" value="Submit"/>
            </form>
        )
    }
}


export default FormValidatiion;