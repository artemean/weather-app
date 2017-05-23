import React from 'react';
import {Link} from 'react-router-dom';

const Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li><Link to="/location/Philadelphia">Philadelphia</Link></li>
                <li><Link to="/location/Rio">Rio</Link></li>
            </ol>
        </div>
    )
};

export default Examples;
