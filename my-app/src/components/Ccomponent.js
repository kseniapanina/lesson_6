import React, { Component } from 'react';
import './style.scss'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: " ",
            second: " ",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.first + '; ' + this.state.second
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Login:</label>
                    <br />
                    <input name="first" type = "text" value={this.state.input} onChange={this.handleChange} />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input name="second" type = "text" value={this.state.input} onChange={this.handleChange} />
                    <br />
                    <button type="submit">Submit!</button>
                </form>
                <h3> {this.state.submit}</h3>
            </div>
        )
    }
}

