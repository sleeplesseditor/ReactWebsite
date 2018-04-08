import React, {Component} from 'react';
import './style.css';

import NavBar from './NavBar';

class Header extends Component {
    render() {
        return (
            <div className="title-header">
                <NavBar />
                <div className="title-text">
                    <div className="digax-title-first">UK Based</div>
                    <div className="digax-title-second">Digital Asset</div>
                    <div className="digax-title-second"> Exchange</div>
                </div>
            </div>
        )
    }
}

export default Header;

// Potential for using Redux Sparklines and API for live tracking information under title section //