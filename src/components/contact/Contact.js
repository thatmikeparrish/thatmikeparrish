import React, { Component } from 'react';

import GitHub from '../../img/contactLogos/github.png'
import LinkedIn from '../../img/contactLogos/linkedin.png'
import Twitter from '../../img/contactLogos/twitter.png'
import Email from '../../img/contactLogos/gmail.png'

export default class Contact extends Component {
    render() {
        return (
            <div className="content">
                    <div className="d-flex justify-content-center">
                        <h2 className="sectionTitle">Contact</h2>
                    </div>
                    <h2 className="contactContent">Feel free to contact or follow me at any of the platforms below!</h2>
                    <div className="contactLink d-flex flex-row flex-wrap justify-content-around">
                        <a href="https://www.linkedin.com/in/thatmikeparrish/">
                            <h3 className="contactPlatform"><img className="contactLogo" src={LinkedIn} alt="linkedIn"/>
                            LinkedIn</h3>
                        </a>
                        <a href="https://github.com/thatmikeparrish">
                            <h3 className="contactPlatform"><img className="contactLogo" src={GitHub} alt="GitHub"/>
                            GitHub</h3>
                        </a>
                        <a href="https://twitter.com/ThatMikeParrish">
                            <h3 className="contactPlatform"><img className="contactLogo" src={Twitter} alt="Twitter"/>
                            Twitter</h3>
                        </a>
                        <a href="mailto:thatmikeparrish@gmail.com?Subject=Information%20request" target="_top">
                            <h3 className="contactPlatform"><img className="contactLogo" src={Email} alt="Email"/>
                            Email</h3>
                        </a>
                    </div>
                    <br></br>
                    <h6 className="footer">Branding and Site Design by Mike Parrish</h6>
            </div>
        );
    }
}