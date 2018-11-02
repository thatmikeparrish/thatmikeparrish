import React, { Component } from 'react';

export default class Bio extends Component {
    render() {
        return (
            <div className="content">
                <div className="d-flex justify-content-center">
                    <h2 className="sectionTitle">Bio</h2>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="mike" alt="Its a pic of me!"></div>
                    <div className="myBio d-flex flex-column justify-content-around">
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                        <br></br>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    </div>
                </div>
                <div className="d-flex justify-content-around flex-wrap">

                </div>
            </div>
        );
    }
}