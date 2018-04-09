import React, {Component} from 'react';
import './style.css';
import logo from './images/logodigax.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top digax-navbar">
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <a className ="navbar-brand" href="/">
                                <img src={logo} className="d-inline-block align-top" alt="Digax"/>
                            </a>
                        </div>
                        <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
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
                            <ul className="navbar-nav navbar-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Login</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/">Sign Up</a>
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

//Links have potential to use React Router to take user to relevant pages without reloading app