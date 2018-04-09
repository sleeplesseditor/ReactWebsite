import React , { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div className="features-section" id="features-div">
                <div className="features-title">
                    Features
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col feature-details">
                            <div className="feature-subheadings">Security</div>
                            We will be implementing a wide array of security features. These include standard areas of best practise, pen testing, cold storage, monitoring etc.
                        </div>
                        <div className="col feature-details">  
                            <div className="feature-subheadings">Compliance</div>
                            We will be fully compliant with UK &amp; EU law. We have and will continue to take specialist legal counsel on virtual currency trading &amp; activities.
                        </div>
                        <div className="col feature-details">
                            <div className="feature-subheadings">Reliability</div>
                            It is important to us that people can rely on the platform 24/7 365 days a year. Therefore we intend to invest heavily in our infrastructure and monitoring.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col feature-details">
                            <div className="feature-subheadings">Service</div>
                            We found many traders were disatisified with current levels of service. We aim to provide prompt and high quality support services.
                        </div>
                        <div className="col feature-details">  
                            <div className="feature-subheadings">Speed</div>
                            Our MVP trading engine is documented to process up to 5000 TPS. We aim to improve this further with several software updates post-launch.   
                          </div>
                        <div className="col feature-details">
                            <div className="feature-subheadings">Transparent</div>
                            We want to take a transparent approach when it comes to the exchange and our policies. We intend for funds held by us to be fully auditable at any time.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Features;