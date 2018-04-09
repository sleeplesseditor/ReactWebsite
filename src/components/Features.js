import React , { Component } from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';

import security from './images/7.png';
import compliance from './images/2.png';
import reliability from './images/3.png';
import service from './images/4.png';
import speed from './images/5.png';
import transparent from './images/6.png';

class Features extends Component {
    render() {
        return (
            <div className="features-section">
                <div className="features-title" id="features">
                    Features
                </div>
                <ScrollAnimation animateIn="fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col feature-details">
                            <div className="feature-icon">
                                <img src={security} alt="security" />
                            </div>
                            <div className="feature-subheadings">Security</div>
                            We will be implementing a wide array of security features. These include standard areas of best practise, pen testing, cold storage, monitoring etc.
                        </div>
                        <div className="col feature-details">  
                            <div className="feature-icon">
                                <img src={compliance} alt="compliance" />
                            </div>
                            <div className="feature-subheadings">Compliance</div>
                            We will be fully compliant with UK &amp; EU law. We have and will continue to take specialist legal counsel on virtual currency trading &amp; activities.
                        </div>
                        <div className="col feature-details">
                            <div className="feature-icon">
                                <img src={reliability} alt="reliability" />
                            </div>
                            <div className="feature-subheadings">Reliability</div>
                            It is important to us that people can rely on the platform 24/7 365 days a year. Therefore we intend to invest heavily in our infrastructure and monitoring.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col feature-details">
                            <div className="feature-icon">
                                <img src={service} alt="service" />
                            </div>
                            <div className="feature-subheadings">Service</div>
                            We found many traders were disatisified with current levels of service. We aim to provide prompt and high quality support services.
                        </div>
                        <div className="col feature-details">
                            <div className="feature-icon">
                                <img src={speed} alt="speed" />
                            </div>  
                            <div className="feature-subheadings">Speed</div>
                            Our MVP trading engine is documented to process up to 5000 TPS. We aim to improve this further with several software updates post-launch.   
                          </div>
                        <div className="col feature-details">
                            <div className="feature-icon">
                                <img src={transparent} alt="transparent" />
                            </div>  
                            <div className="feature-subheadings">Transparent</div>
                            We want to take a transparent approach when it comes to the exchange and our policies. We intend for funds held by us to be fully auditable at any time.
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
                <div id="staff"></div>
            </div>
        )
    }
};

export default Features;