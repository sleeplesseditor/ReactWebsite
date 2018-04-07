import React, {Component} from 'react';
import './style.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className ="navbar-brand" href="/">
                                <img src="https://digax.com/logodigax.png" className="d-inline-block align-top" alt="Digax"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse" id="navbarNav">
                            <ul className="navbar-nav main-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Exchange</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Statistics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default NavBar;