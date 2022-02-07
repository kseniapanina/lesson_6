import React, { Component } from 'react';
import styles from "./form.module.css";


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            passwordValid: true,
            emailValid: true,
        });


    };
    handleSubmit(event) {
        event.preventDefault()
        let emailValid;
        let passwordValid;
       
        if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            emailValid = true;
        } else {
            this.setState({

                emailValid: false
                
            }
           );
        }
        
        if (this.state.password.length >= 6) {
            passwordValid = true;
        } else {
            this.setState({
               
                passwordValid: false
            });
        }
    
        if (emailValid && passwordValid) {
            console.log("submit success")
        }
     }

    render() {
       
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Sign up</h2>
                <div >

                </div>
                <div >
                <label>Email address: </label>
                    <input type="text" required name="email" value={this.state.input} onChange={this.handleChange} className={!this.state.emailValid ? styles.error :"" } />
                </div>
                <div >
                    <label >Password: </label>
                    <input type="password" name="password" value={this.state.input} onChange={this.handleChange} className={!this.state.passwordValid ? styles.error :""}/>
                </div>
                <button type="submit" >Sign up</button>
            </form>
        )
    }
}
