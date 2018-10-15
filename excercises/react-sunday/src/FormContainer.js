
import React, { Component } from 'react'

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = props.inputs;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target } = event;
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state);
        if (this.props.reset) this.setState(this.props.inputs)
    }

    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            inputs: this.state
        }
        return this.props.render(props)
    }
}
