import React, { Component } from 'react';
import './Footer.css';

import Logo from '../../img/branding/logoMPMix2.png'
import facebook from '../../img/contactLogos/facebook.png'
import Twitter from '../../img/contactLogos/twitter.png'
import LinkedIn from '../../img/contactLogos/linkedin.png'
import GitHub from '../../img/contactLogos/githubWhite.png'
import Email from '../../img/contactLogos/gmail.png'

export default class Contact extends Component {
    render() {
        return (
            <div className="footer">
                <div className="d-flex justify-content-around">
                    <div>
                        <h3 className="contactPlatform"><img className="footerLogo" src={Logo} alt="Mike Parrish" />Mike Parrish</h3>
                        <ul className="contact">
                            <li>Phone: 615.788.6484</li>
                            <li>E-mail: thatmikeparrish@gmail.com</li>
                            <li>Greater Nashville Area</li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-around">
                        <a href="https://www.facebook.com/thatmikeparrish">
                            <img className="contactLogo" src={facebook} alt="facebook" />  
                        </a>
                        <a href="https://twitter.com/ThatMikeParrish?lang=en">
                            <img className="contactLogo" src={Twitter} alt="Twitter" />  
                        </a>
                        <a href="https://www.linkedin.com/in/thatmikeparrish/">
                            <img className="contactLogo" src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/thatmikeparrish">
                            <img className="contactLogo" src={GitHub} alt="GitHub" />
                        </a>
                        <a href="mailto:thatmikeparrish@gmail.com">
                            <img className="contactLogo" src={Email} alt="Email" />
                        </a>
                    </div>
                </div>
                <div className="d-flex justify-content-around line">
                    <h6>&copy; Mike Parrish</h6>
                    <h6>Branding and Site Design by Mike Parrish</h6>
                </div>
            </div>
        );
    }
}