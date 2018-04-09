import React, {Component} from 'react';
import './style.css';
import { Animated } from 'react-animated-css';

import NavBar from './NavBar';
import laptop from './images/laptopui2.png';

class Header extends Component {    
    productButton() {
        const element = document.getElementById('features');
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    staffButton() {
        const element = document.getElementById('staff');
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    render() {
        return (
            <div className="title-header">
                <NavBar />
                <div className="title-text">
                    <div className="digax-title-first">UK Based</div>
                    <div className="digax-title-second">Digital Asset</div>
                    <div className="digax-title-second"> Exchange</div>
                </div>
                <div>
                    <button className="product-button btn btn-outline-warning" onClick={this.productButton}>Our Product</button>
                    <button className="staff-button btn btn-outline-warning" onClick={this.staffButton}>Who We Are</button>
                </div>
                <Animated animationIn="fadeInRight" isVisible={true}>
                <div className="laptop-image hidden-xs fadeInRight">
                    <img src={laptop} alt="laptop" />
                    <div className="laptop-text">Assets shown on this page are for illustrative purposes only</div>
                </div>
                </Animated>
            </div>
        )
    }
}

export default Header;

// Potential for using Redux Sparklines and API for live tracking information under title section //