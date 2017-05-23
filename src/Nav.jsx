import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {

    onSearch = (e) => {
        e.preventDefault();
        const location = this.refs.search.value;
        const encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            this.refs.search.value = '';
            this.props.history.push('/location/' + encodedLocation);
        }
    };

    render() {
        return (
            <nav className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="/examples">Examples</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search weather" ref="search"/></li>
                            <li><input type="submit" className="button" value="Search" /></li>
                        </ul>
                    </form>
                </div>
            </nav>
        )
    }
}

const NavWithRouter = withRouter(Nav);

export default NavWithRouter;
