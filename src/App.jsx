import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav';
import Weather from './Weather';
import About from './About';
import Examples from './Examples';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav asd="asd"/>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        <Route path="/" exact component={Weather} />
                        <Route path="/location/:city" component={Weather} />
                        <Route path="/about" component={() => (<About name="hello" />)} />
                        <Route path="/examples" component={Examples} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
