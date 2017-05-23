import React, { Component } from 'react';
import GreeterMessage from './GreeterMessage';
import GreeterForm from './GreeterForm';

class Greeter extends Component {
    static defaultProps = {
        message: "Default message",
        name: "Someone"
    };

    state = {
        name: this.props.name,
        message: this.props.message
    };

    handleNewData = (updates) => {
        this.setState(updates);
    };

    render() {
        return (
            <div className="greeter">
                <GreeterMessage name={this.state.name} message={this.state.message} />
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        )
    }
}

export default Greeter;
