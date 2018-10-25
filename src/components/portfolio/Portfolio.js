import React, { Component } from 'react';

import WOAH from "../../img/logos/woah.png"
import AmyTaylorCountry from "../../img/logos/amytaylorcountry.png"

export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content d-flex justify-content-center">
                    <h2 className="sectionTitle">Portfolio & Projects</h2>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-around">
                    <div className="portfolioEntry">
                        <img className="image" src={AmyTaylorCountry} alt="Amy Taylor Country"/>
                        <div className="overlay">
                            <p className="text">Amy Taylor Country</p>
                        </div>
                    </div>
                    <div className="portfolioEntry">
                        <img className="image" src={WOAH} alt="World of Apathetic Heroes"/>
                        <div className="overlay">
                            <p className="text">World Of Apathetic Heroes</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}