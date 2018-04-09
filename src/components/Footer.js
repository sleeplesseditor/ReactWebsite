import React, {Component} from 'react';
import './style.css';
import logo from './images/logodigax.png';

class Footer extends Component {
    render() {
        return (
            <div className="container digax-footer">
                <div className="row">
                    <div className="footer-logo col">
                        <img src={logo} alt="Digax"/>
                        <br/>
                        © Digax Ltd 2018 | digax.com
                    </div>
                    <div className="col">
                        <div className="footer-col-headings">Digax.com</div>
                        <ul className="list-unstyled">
                            <li>
                                Irongate House
                            </li>
                            <li>
                                30 Dukes Place
                            </li>
                            <li>
                                London
                            </li>
                            <li>
                                EC3A
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-headings">Markets</div>
                        <ul className="list-unstyled">
                            <li>
                                How to Trade
                            </li>
                            <li>
                                Statistics
                            </li>
                            <li>
                                Digax Pro
                            </li>
                            <li>
                                Listings
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-headings">Exchange</div>
                        <ul className="list-unstyled">
                            <li>
                                Status
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Support
                            </li>
                            <li>
                                Jobs
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-headings">Docs</div>
                        <ul className="list-unstyled">
                            <li>
                                Terms &amp; Conditions
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                API Docs
                            </li>
                            <li>
                                Fees
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;