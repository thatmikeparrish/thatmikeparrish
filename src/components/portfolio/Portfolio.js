import React, { Component } from 'react';

import WOAH from "../../img/logos/woah.png"
import AmyTaylorCountry from "../../img/logos/amytaylorcountry.png"

export default class Portfolio extends Component {
    render() {
        return (
            <div className="content">
                <div className="d-flex justify-content-center">
                    <h2 className="sectionTitle">Portfolio & Projects</h2>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-around">
                    <div className="portfolioEntry">
                        <img className="image" src={AmyTaylorCountry} alt="Amy Taylor Country"/>
                        <div className="overlay">
                            <div className="text">
                                <h4 className="name"><a href="#">Amy Taylor Country</a></h4>
                                <h6 className="info">Singer Songwriter based out of Nashville</h6>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioEntry">
                        <img className="image" src={WOAH} alt="World of Apathetic Heroes"/>
                        <div className="overlay">
                            <div className="text">
                                <h4 className="name"><a href="https://worldofapatheticheroes.herokuapp.com/">World Of Apathetic Heroes</a></h4>
                                <h6 className="info">My Front-end Capstone project at NSS</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}