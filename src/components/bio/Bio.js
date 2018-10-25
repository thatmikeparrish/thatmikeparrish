import React, { Component } from 'react';

import Mike from "../../img/branding/mike.jpg"

export default class Bio extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="content d-flex justify-content-center">
                        <h2 className="sectionTitle">Bio</h2>
                    </div>
                    <div className="d-flex justify-content-around">
                        <img className="mike" src={Mike} />
                        <div className="myBio">
                            <p>Stuff about me</p>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}