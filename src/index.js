import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import 'foundation-sites/dist/css/foundation.css';
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);
