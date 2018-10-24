import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="container">
                        <img src={"../../../img/branding/logoMikeParrishMix2.png"} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}