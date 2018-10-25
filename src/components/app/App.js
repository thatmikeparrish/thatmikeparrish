import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MainLogo from "../../img/branding/logoMikeParrishMix2.png"

import Bio from "../bio/Bio"
import Contact from "../contact/Contact"
import Portfolio from "../portfolio/Portfolio"
import Reviews from "../reviews/Reviews"

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="background"></div>
                <div className="container pageContent">
                    <div className="d-flex justify-content-center">
                        <img src={MainLogo} alt="Mike Parrish"/>
                    </div>
                    <Bio />
                    <Portfolio />
                    <Reviews />
                    <Contact />
                </div>
            </React.Fragment>
        );
    }
}