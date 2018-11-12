import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MainLogo from "../../img/branding/logoMikeParrishMix2.png"

import NavBar from '../Nav/Nav'
import Bio from "../Bio/Bio"
import Contact from "../Contact/Contact"
import Portfolio from "../Portfolio/Portfolio"
import Reviews from "../Reviews/Reviews"

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="top "className="background"></div>
                <NavBar />
                <div className="container pageContent">
                    <div className="d-flex justify-content-center">
                        <img src={MainLogo} alt="Mike Parrish"/>
                    </div>
                    <div className="navSpacing" id="bio"></div>
                    <Bio />
                    <div className="navSpacingPortfolio" id="portfolio"></div>
                    <Portfolio />
                    {/* <div className="navSpacingReviews" id="reviews"></div>
                    <Reviews /> */}
                    <div className="navSpacing" id="contact"></div>
                </div>
                <Contact />
            </React.Fragment>
        );
    }
}