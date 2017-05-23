import React, { Component } from 'react';

class WeatherForm extends Component {
    onFormSubmit = (e) => {
        e.preventDefault();
        const location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input ref="location" type="text" placeholder="Enter city name" />
                <button className="button expanded">Get Weather</button>
            </form>
        )
    }
}

export default WeatherForm;
