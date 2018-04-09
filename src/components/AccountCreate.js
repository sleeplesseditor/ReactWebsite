import React, { Component } from 'react';
import './style.css';

class AccountCreate extends Component {
    render() {
        return (
            <div className="account-create">
                <div className="account-create-text">
                    <div className="row">
                        <div className="col-lg-11">
                            <div className="account-create-text-content">
                                Create an account to start trading
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountCreate;

//Potential for documentation modal to be added here or React Router path