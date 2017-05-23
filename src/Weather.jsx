import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import openWeatherMap from './api/openWeatherMap.js';

class Weather extends Component {
    state = {
        isLoading: false
    };

    componentDidMount() {
        const loc = this.props.match.params.city;

        if(loc && loc.length > 0) {
            this.handleSearch(loc);
        }
    }

    componentDidUpdate() {
        const loc = this.props.match.params.city;
        if (this.state.loc !== loc && !!loc) {
            this.setState({loc: loc});//updating the component on Nav search (via router)
        }
    }


    handleSearch = (location) => {
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            loc: undefined,
            temp: undefined,
        });
        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                loc: location,
                temp: temp,
                isLoading: false
            });
        }, (err) => {
            this.setState({
                isLoading: false,
                errorMessage: err.message
            });
        })
    };

    render() {
        const {isLoading, temp, loc, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && loc) {
                return <WeatherMessage location={loc} temp={temp} />
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (<ErrorModal message={errorMessage} />)
            }
        }

        return (
            <div>
                <div className="text-center">
                    <h1>Get Weather</h1>
                    <p>in any city of the world</p>
                </div>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}

export default Weather;
