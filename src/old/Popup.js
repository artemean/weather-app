import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div className="popup">{this.props.message}</div>
        )
    }
}

export default Popup;