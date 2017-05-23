import React, { Component } from 'react';

class GreeterForm extends Component {
    formHandler = (e) => {
        e.preventDefault();
        const name = this.refs.name.value;
        const message = this.refs.message.value;
        let updates = {};
        if(name.length > 0) {
            this.refs.name.value = '';//Empty the input
            updates.name = name;
        }

        if(message.length > 0) {
            this.refs.message.value = '';//Empty the input
            updates.message = message;
        }

        this.props.onNewData(updates);//Call the method on parent
    };

    render() {
        return (
            <div>
                <form onSubmit={this.formHandler}>
                    <input type="text" ref="name" />
                    <br />
                    <textarea className="tar" ref="message" cols="30" rows="10" />
                    <br />
                    <button>Set Name</button>
                </form>
            </div>
        )
    }
}

export default GreeterForm;