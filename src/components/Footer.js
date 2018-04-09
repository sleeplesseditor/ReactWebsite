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
                                <a href="/">How to Trade</a>
                            </li>
                            <li>
                                <a href="/">Statistics</a>
                            </li>
                            <li>
                                <a href="/">Digax Pro</a>
                            </li>
                            <li>
                                <a href="/">Listings</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-headings">Exchange</div>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Status</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Support</a>
                            </li>
                            <li>
                                <a href="/">Jobs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-headings">Docs</div>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">API Docs</a>
                            </li>
                            <li>
                                <a href="/">Fees</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;

//Potential for some links such as Docs to render Modals