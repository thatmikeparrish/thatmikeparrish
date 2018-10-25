import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MainLogo from "../../img/branding/logoMikeParrishMix2.png"

import Bio from "../bio/Bio"
import Contact from "../contact/Contact"
import Portfolio from "../portfolio/Portfolio"
import Testimonials from "../testimonials/Testimonials"

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="background"></div>
                <div className="container pageContent">
                    <div className="d-flex justify-content-center">
                        <img src={MainLogo} />
                    </div>
                    <Bio />
                    <Portfolio />
                    <Testimonials />
                    <Contact />
                </div>
            </React.Fragment>
        );
    }
}