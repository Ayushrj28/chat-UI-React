import React, { Component } from 'react';
import logo from './../../images/logo.png';
import './nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">

              
                <div className="nav_block">
                <img src={logo} alt="img"/>
                </div>
                
                
            </div>
        )
    }
}
