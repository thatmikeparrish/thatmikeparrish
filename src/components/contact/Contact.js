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
                    <div className="d-flex flex-row flex-wrap justify-content-around">
                        <a href="https://www.linkedin.com/in/thatmikeparrish/">
                            <img className="contactLogo" src={LinkedIn} alt="linkedIn"/>
                        </a>
                        <a href="https://github.com/thatmikeparrish">
                            <img className="contactLogo" src={GitHub} alt="GitHub"/>
                        </a>
                        <a href="https://twitter.com/ThatMikeParrish">
                            <img className="contactLogo" src={Twitter} alt="Twitter"/>
                        </a>
                        <a href="mailto:thatmikeparrish@gmail.com?Subject=Information%20request" target="_top">
                            <img className="contactLogo" src={Email} alt="Email"/>
                        </a>
                    </div>
            </div>
        );
    }
}