import React, { Component } from 'react';

import ExNSS from '../../img/experience/nss-logo.png'
import PF from '../../img/experience/premierfirestop.jpg'
import EdNSS from '../../img/education/nss-logo.png'
import ITT from '../../img/education/itt.jpg'

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
                        <p>Howdy, I'm Mike, and welcome to my page! I'm a huge nerd who loves the outdoors just as much as games and comics.</p>
                        <p>Solving problems and figuring out problems is one of the best aspects of development to me. With development I can help others by providing a technical solution. I truly enjoy front-end development, with front-end I can be as creative as the project calls for.</p>
                    </div>
                </div>
                <h4 className="sectionSubTitle">Experience</h4>
                <div className="experience d-flex">
                    <img className="exLogo" src={ExNSS} alt="Nashville Software School" />
                    <div className="exContent">
                        <h5>Junior Software Developer</h5>
                        <h6>Nashville Software School</h6>
                        <h6>July 2018 - Present</h6>
                        <p>Intensive full-time software development boot camp focusing on full stack development fundamentals and problem-solving. The final half of the program executed in a simulated company environment with Scrum methodology.</p>
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
                <div className="experience d-flex">
                    <img className="exLogo" src={PF} alt="Premier Firestop" />
                    <div className="exContent">
                        <h5>IT Systems Coordinator</h5>
                        <h6>Premier Firestop</h6>
                        <h6>February 2016 - January 2018</h6>
                        <p>Barrier management and fire damper inspection services. Provides custom reporting and issue tracking for both new construction and existing healthcare facilities.</p>
                        <ul>
                            <li>Acted as a project manager to create an iPad application for the employees in the field</li>
                            <li>Provided quality assurance testing for the app and documented bugs or errors</li>
                            <li>Communicated with upper management and the field staff to ensure the effectiveness of the application and coordinated with the developer to release updates with requested featuresJavaScript fundamentals leveraging DRY, modular, readable code and reusable components</li>
                            <li>Designed and generated reports based on the needs of Premier Firestop’s clients and management staff</li>
                            <li>Verified information provided by the field staff via the app and made any necessary changes in the database</li>
                            <li>Acted as administrator of Office 365 and SharePoint systems</li>
                            <li>Developed custom SharePoint sites to assimilate business information and make recommendations for an impactful SharePoint solution</li>
                            <li>Designed and implemented a company-wide database to provide BI and company health reporting</li>
                            <li>Created and maintained client sites and user credentials in WordPress to provide access to documents required by the clients</li>
                            <li>Created and maintained an active inventory control of all IT related items within Premier Firestop</li>
                        </ul>
                    </div>
                </div>
                <h4 className="sectionSubTitle">Education</h4>
                <div className="d-flex justify-content-center">
                <div className="customColumn d-flex flex-column">
                    <div className="education d-flex">
                        <img className="edLogo" src={EdNSS} alt="Nashville Software School" />
                        <div className="edContent">
                            <h5>Nashville Software School</h5>
                            <h6>Full-Stack Software Development</h6>
                            <p>Intensive full-time software development boot camp focusing on full stack development fundamentals and problem-solving. The final half of the program executed in a simulated company environment with Scrum methodology</p>
                        </div>
                    </div>
                    <div className="education d-flex">
                        <img className="edLogo" src={ITT} alt="Nashville Software School" />
                        <div className="edContent">
                            <h5>ITT Technical Institute-Nashville</h5>
                            <h6>Software Development</h6>
                            <p>The ITT Technical Institutes are institutions of higher learning committed to offering quality undergraduate, graduate and continuing education locally, nationally and worldwide to students of diverse backgrounds, interests and abilities. ITT Tech offers educational programs that integrate life-long learning with knowledge and skills</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}