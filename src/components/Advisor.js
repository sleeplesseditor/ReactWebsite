import React, { Component } from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';

import moneypot from './images/moneypot.png';
import qrc from './images/qrc.png';

class Advisor extends Component {
    render() {
        return (
            <div className="staff-section">
                <div className="staff-title">
                    Advisors
                    <br />
                    <div className="advisor-profile">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="advisor-profile-text">
                                    <div className="advisor-profile-text-detail">
                                        <img src={moneypot} className="profile-img" alt="moneypot" />
                                        <div className="social-linkedin">
                                            <a href="https://www.linkedin.com/company/15255644/">
                                                <i className="ion-social-linkedin"></i>
                                            </a>
                                        </div>
                                        <div className="social-twitter">
                                            <a href="https://twitter.com/moneypotwallet?lang=en">
                                                <i className="ion-social-twitter"></i>
                                            </a>
                                        </div>
                                        Advisor
                                        <br/>
                                        <span className="profile-title">MoneyPot</span>
                                        <br />
                                        <span className="profile-text">One of our first advisors, MoneyPot are a popular Bitcoin gambling wallet service in operation for over 3 years.</span> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="advisor-profile-text">
                                <div className="advisor-profile-text-detail">
                                        <img src={qrc} className="profile-img" alt="QRC" />
                                        <div className="social-linkedin">
                                            <a href="https://www.linkedin.com/company/11262216/">
                                                <i className="ion-social-linkedin"></i>
                                            </a>
                                        </div>
                                        Advisor
                                        <br/>
                                        <span className="profile-title">QRC Group</span>
                                        <br />
                                        <span className="profile-text">QRC is pioneering a new trend of layering compliance into public blockchain. Their focus is primarily in RegTech.</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advisor;