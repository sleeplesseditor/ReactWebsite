import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <a class ="navbar-brand" href="/">Digax</a>
                    <a href="/">Exchange</a>
                    <a href="/">Statistics</a>
                    <a href="/"> Status</a>
                </nav>
            </div>
        )
    }
};

export default NavBar;