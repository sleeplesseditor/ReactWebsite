import React, { Component } from 'react';
import './style.css';

import ben from './images/benfinalpic.png';
import elliot from './images/eliottfinalpic.png';
import stefano from './images/stefanofinalpic.png';
import placeholder from './images/Placeholder.png';

class Staff extends Component {
    render() {
        return (
            <div className="staff-section">
                <div className="staff-title">
                    The Team
                    <br />
                    <div className="staff-profile">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                    <div className="staff-profile-text-detail">
                                        <img src={ben} className="profile-img" alt="Ben Morley" />
                                        <div className="social-linkedin">
                                            <a href="https://www.linkedin.com/in/ben-morley-11862189/">
                                                <i className="ion-social-linkedin"></i>
                                            </a>
                                        </div>
                                        <div className="social-twitter">
                                            <a href="https://twitter.com/benmorley94">
                                                <i className="ion-social-twitter"></i>
                                            </a>
                                        </div>
                                        Co-Founder &amp; CEO
                                        <br/>
                                        <span className="profile-title">Ben Morley</span>
                                        <br />
                                        <span className="profile-text">5 years experience in trading, investing &amp; brokering in the Bitcoin &amp; related technologies space. 10 years experience in web development.</span> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                <div className="staff-profile-text-detail">
                                        <img src={elliot} className="profile-img" alt="Elliot Whiting" />
                                        <div className="social-linkedin">
                                            <a href="https://www.linkedin.com/in/elliot-whiting-6bb739145/">
                                                <i className="ion-social-linkedin"></i>
                                            </a>
                                        </div>
                                        Co-Founder &amp; CEO
                                        <br/>
                                        <span className="profile-title">Elliot Whiting</span>
                                        <br />
                                        <span className="profile-text">A recent Business Economics graduate from Cardiff. Elliot has a keen interest in FinTech applications and the cryptocurrency space.</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                    <div className="staff-profile-text-detail">
                                        <img src={stefano} className="profile-img" alt="Stefano Palulello" />
                                        <div className="social-linkedin">
                                            <a href="https://www.linkedin.com/in/stefanopaluello/">
                                                <i className="ion-social-linkedin"></i>
                                            </a>
                                        </div>
                                        <div className="social-twitter">
                                            <a href="https://twitter.com/palutz">
                                                <i className="ion-social-twitter"></i>
                                            </a>
                                        </div>
                                        CTO
                                        <br/>
                                        <span className="profile-title">Stefano Palulello</span>
                                        <br />
                                        <span className="profile-text">Deep knowledge in blockchain related technology. Senior developer with tech lead experience working for a wide array of UK companies.</span> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                <div className="staff-profile-text-detail">
                                        <img src={placeholder} className="profile-img" alt="Elliot Whiting" />
                                        <div className="social-linkedin">
                                            <a href="https://www.linkedin.com/in/arta-hysi-b5834346/">
                                                <i className="ion-social-linkedin"></i>
                                            </a>
                                        </div>
                                        COO
                                        <br/>
                                        <span className="profile-title">Arta Hysi</span>
                                        <br />
                                        <span className="profile-text">Experience in International Relations, Corporate Law, Commercial Litigation, Criminal Law (AML), and Economic Development.</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                    <div className="staff-profile-text-detail">
                                        <img src={placeholder} className="profile-img" alt="Joseph Huang" />
                                        Full-Stack Developer
                                        <br/>
                                        <span className="profile-title">Joseph Huang</span>
                                        <br />
                                        <span className="profile-text">Rails developer with experience developing secure applications. Joseph is an active member in the London's tech for good community.</span> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                <div className="staff-profile-text-detail">
                                        <img src={placeholder} className="profile-img" alt="Sean Hargadon" />
                                        Full-Stack Developer
                                        <br/>
                                        <span className="profile-title">Sean Hargadon</span>
                                        <br />
                                        <span className="profile-text">A full stack developer. Sean has a passion for building applications and furthering his knowledge in new technologies.</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="staff-profile-text">
                                    <div className="staff-profile-text-detail">
                                        <img src={placeholder} className="profile-img" alt="Rufus Madge" />
                                        Development Operations Engineer
                                        <br/>
                                        <span className="profile-title">Rufus Madge</span>
                                        <br />
                                        <span className="profile-text">Rufus has a computer science background with a focus on automation and infrastructure technology.</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Staff;