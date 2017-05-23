import React, { Component } from 'react';

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');

class ErrorModal extends Component {
    static defaultProps = {
        title: "Error",
        message: "Default message"
    };

    componentDidMount() {
        const modal = new window.Foundation.Reveal(jquery('#error-modal'));
        modal.open();
    }

    render() {
        const {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button" data-close="">OK</button>
                </p>
            </div>
        )
    }
}

export default ErrorModal;
