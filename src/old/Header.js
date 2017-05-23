import React, { Component } from 'react';
import Popup from './Popup';

class Header extends Component {

    // constructor(props){
    //     super(props);
    //     this.onClick = this.onClick.bind(this);
    // }
    //
    // onClick(e) {
    //     e.preventDefault();
    //     const name = this.refs.name.value;
    //     console.log(name);
    // }
    // getInitialState() {
    //     return {
    //         name: this.props.name
    //     }
    // }

    state = {
        name: this.props.name
    };

    static defaultProps = {
        message: "Default message",
        name: "Someone"
    };

    onClick = (e) => {
        e.preventDefault();
        const name = this.refs.name.value;
        this.refs.name.value = '';

        this.setState({
            name: name
        });
    };

    showPopup = (e) => {
        e.preventDefault();
        return <Popup isOpen="true" message="Popup message"></Popup>
    };

    render() {
        return (
            <div>
                <header className="main-header">
                    <h1>Hello {this.state.name}</h1>
                    <p>{this.props.message}</p>
                </header>
                <form onSubmit={this.onClick}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>
                <button onClick={this.showPopup}>Hit!</button>
            </div>
        )
    }
}

export default Header;
