import React, { Component } from 'react';
import './Nav.css';

import NavLogo from '../../img/branding/logoMPMix2.png'

export default class NavBar extends Component {
    render() {

        return (
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#top">
                    <h1 className="branding"><img src={NavLogo} width="70" height="70" className="d-inline-block align-center" alt="" />
                        Mike Parrish</h1>
                </a>
                <ul className="nav">
                        <li className="nav-item">
                            <a href="#bio" className="nav-link" >
                                <h4>Bio</h4>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="#resume" className="nav-link" >
                                <h4>Resume</h4>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link" >
                                <h4>Portfolio</h4>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="#reviews" className="nav-link" >
                                <h4>Reviews</h4>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" >
                                <h4>Contact</h4>
                            </a>
                        </li>
                    </ul>
            </nav>
        );
    }
}