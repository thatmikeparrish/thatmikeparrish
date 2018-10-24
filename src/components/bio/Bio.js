import React, { Component } from 'react';

import Mike from "../../img/branding/mike.jpg"

export default class Bio extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="content d-flex justify-content-center">
                        <h1>Bio</h1>
                    </div>
                    <div className="d-flex justify-content-around">
                    <img className="mike" src={Mike} />
                        <h4>Stuff about me</h4>
                    </div>
            </React.Fragment>
        );
    }
}