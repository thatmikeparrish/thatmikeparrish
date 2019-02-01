import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MainLogo from "../../img/branding/logoMikeParrishMix2.png"

import NavBar from '../nav/Nav'
import Bio from "../bio/Bio"
import Footer from "../footer/Footer"
import Portfolio from "../portfolio/Portfolio"
/* import Reviews from "../reviews/Reviews" */

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="top "className="background"></div>
                <NavBar />
                <div className="pageContent">
                    <div className="d-flex justify-content-center">
                        <img className="header" src={MainLogo} alt="Mike Parrish"/>
                    </div>
                    <div id="bio"></div>
                    <Bio />
                    {/* <div id="resume"></div>
                    <Resume /> */}
                    <div id="portfolio"></div>
                    <Portfolio />
                    {/* <div id="reviews"></div>
                    <Reviews /> */}
                </div>
                <div id="contact"></div>
                <Footer />
            </React.Fragment>
        );
    }
}