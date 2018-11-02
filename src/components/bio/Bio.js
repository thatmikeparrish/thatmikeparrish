import React, { Component } from 'react';

import NSS from '../../img/experience/nss-logo.png'

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
                <h4 className="sectionSubTitle">Experience</h4>
                <div className="experience d-flex">
                    <img className="exLogo" src={NSS} alt="Nashville Software School" />
                    <div className="exContent">
                        <h5>Junior Software Developer</h5>
                        <h6>Nashville Software School</h6>
                        <h6>July 2018 - Present</h6>
                        <p>Intensive full-time software development boot camp focusing on full stack development fundamentals and problem-solving. The final half of the program executed in a simulated company environment with Scrum methodology </p>
                        <ul>
                            <li>Source code version control with Git/GitHub</li>
                            <li>Project management/tracking with GitHub Projects & issue tracking</li>
                            <li>JavaScript fundamentals leveraging DRY, modular, readable code and reusable components</li>
                            <li>Built single-page applications with HTML, CSS, and JavaScript libraries like JQuery</li>
                            <li>Task Automation with Grunt: Linting with JSHint and module bundling with Browserify</li>
                            <li>Styled applications with CSS Frameworks Bootstrap and Materialize and wrote custom styles</li>
                            <li>Leveraged VMWare for virtualizing windows on PC to contain a Visual Studio 2015 IDE development environment</li>
                            <li>Practiced TDD with mocking framework Moq</li>
                            <li>Application design through whiteboarding dependences and building ERD's</li>
                            <li>Created and modified database design/content using SQL and Dapper</li>
                        </ul>
                    </div>
                </div>
                <h4 className="sectionSubTitle">Education</h4>
                <div className="d-flex justify-content-center">
                <div className="customColumn d-flex flex-column">
                    <div className="education d-flex">
                        <img className="edLogo" src={NSS} alt="Nashville Software School" />
                        <div className="edContent">
                            <h5>Nashville Software School</h5>
                            <h6>Full-Stack Software Development</h6>
                        </div>
                    </div>
                    <div className="education d-flex">
                        <img className="edLogo" src={NSS} alt="Nashville Software School" />
                        <div className="edContent">
                            <h5>ITT Technical Institute-Nashville</h5>
                            <h6>Software Development</h6>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}