import React, { Component } from 'react';

class GreeterMessage extends Component {
    render() {
        const name = this.props.name;
        return (
            <div>
                <h1>Hello {name}</h1>
                <div className="msg">
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default GreeterMessage;