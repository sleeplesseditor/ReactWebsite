import React, {Component} from 'react';
import './style.css';
import logo from './images/logodigax.png';

//Modal loads upon clicking of 'Login' button

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
                                    <a className="nav-link" href="/" data-toggle="modal" data-target="#myModal">Login</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">Login</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password" />
                                </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-warning">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;

//Links have potential to use React Router to take user to relevant pages without reloading app