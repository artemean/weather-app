import React from 'react';

const WeatherMessage = ({location, temp}) => {
    const loc = location.charAt(0).toUpperCase() + location.slice(1);
    return (
        <div className="text-center">
            <p>The temperature in {loc} is {temp}</p>
        </div>
    )
};

export default WeatherMessage;
