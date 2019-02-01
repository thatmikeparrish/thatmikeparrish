import React, { Component } from 'react';
import './Portfolio.css';

import AmyTaylorCountry from "../../img/projectLogos/amytaylorcountry.png"
import WOAH from "../../img/projectLogos/woah.png"
import CostEstimator from "../../img/projectLogos/CostEstimator.png"

export default class Portfolio extends Component {
    render() {
        return (
            <div className="content portfolio">
                <h2 className="sectionTitle">Portfolio & Projects</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    <div className="portfolioEntry">
                        <img className="image" src={CostEstimator} alt="Cost Estimator" />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="name"><a href="https://github.com/thatmikeparrish/CostEstimator">Cost Estimator</a></h3>
                                <h6 className="info">My back-end Capstone project at NSS</h6>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioEntry">
                        <img className="image" src={WOAH} alt="World of Apathetic Heroes" />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="name"><a href="https://worldofapatheticheroes.herokuapp.com/">World Of Apathetic Heroes</a></h3>
                                <h6 className="info">My front-end Capstone project at NSS</h6>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioEntry">
                        <img className="image" src={AmyTaylorCountry} alt="Amy Taylor Country" />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="name"><a href="https://amytaylorcountry.herokuapp.com/">Amy Taylor Country</a></h3>
                                <h6 className="info">Singer Songwriter based out of Nashville</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}