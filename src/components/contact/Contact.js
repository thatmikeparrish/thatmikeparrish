import React, { Component } from 'react';

import GitHub from '../../img/contactLogos/github.png'
import LinkedIn from '../../img/contactLogos/linkedin.png'
import Twitter from '../../img/contactLogos/twitter.png'

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="content d-flex justify-content-center">
                        <h2 className="sectionTitle">Contact</h2>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-around">
                        <a href="">
                            <img className="contactLogo" src={LinkedIn} alt="linkedIn"/>
                        </a>
                        <a href="https://github.com/thatmikeparrish">
                            <img className="contactLogo" src={GitHub} alt="GitHub"/>
                        </a>
                        <a href="">
                            <img className="contactLogo" src={Twitter} alt="Twitter"/>
                        </a>
                    </div>
            </React.Fragment>
        );
    }
}