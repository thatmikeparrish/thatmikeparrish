import React, { Component } from 'react';
import './Bio.css';

import ExNSS from '../../img/experience/nss-logo.png'
import PF from '../../img/experience/premierfirestop.jpg'
import BR from '../../img/experience/br.jpg'
import EdNSS from '../../img/education/nss-logo.png'
import ITT from '../../img/education/itt.jpg'

export default class Bio extends Component {

    render() {



        return (
            <div className="content">
                <div className="d-flex justify-content-center">
                    <h2 className="sectionTitle">Bio</h2>
                </div>
                <div className="container d-flex justify-content-around">
                    <div className="mike" alt="Me or things I like!"></div>
                    <div className="myBio d-flex flex-column justify-content-around">
                        <p>Howdy, my name is Mike Parrish and I am a software developer with an affinity for thinking outside the box. I'm currently attending Nashville Software School to hone my development skills.</p>
                        <p>A little about me... I'm a huge nerd that plays games and reads comics. Flash and Green Lantern are my favorite super heroes! When I'm not working I'm typically playing World of Warcraft or Magic the Gathering. Camping and backpacking are a huge part of my life, both my fiancee and I enjoy getting out, taking the path less traveled, and exploring all that we can.</p>
                    </div>
                </div>
                <h6 className="devQuote">"Things aren't always #000000 and #ffffff, so let me help you decode the #808080!"</h6>
                <h4 className="sectionSubTitle">Experience</h4>
                <div className="d-flex flex-wrap-reverse justify-content-center">
                    <div className="order-3 experience d-flex">
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
                    <div className="order-1 experience d-flex">
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
                    <div className="order-2 experience d-flex">
                        <img className="exLogo" src={BR} alt="Premier Firestop" />
                        <div className="exContent">
                            <h5>Estimator II</h5>
                            <h6>B.R. McMillan & Assoc. Inc.</h6>
                            <h6>March 2010 - October 2015</h6>
                            <p>A construction company specializing in commercial construction for new construction in healthcare and military. Performs general trades packages, Division 10 packages, and Firestopping packages.</p>
                            <ul>
                                <li>Assisted in identifying new work to be pursued that is consistent with the Company’s marketing strategy.</li>
                                <li>Cultivated new business ventures through existing business relationships and former customers.</li>
                                <li>Analyzed job site conditions as necessary and prepared takeoff of trades performed by B.R. McMillan.</li>
                                <li>Generated request for information forms (RFI’s) where appropriate to provide quality assurance and customer satisfaction.</li>
                                <li>Ensured that estimates are priced with an estimated gross profit consistent with the necessary profit objectives of B.R McMillan as communicated by senior management.</li>
                                <li>Managed and maintained both technical drawings and specifications for all assigned projects. </li>
                                <li>Prepared quotes for future business endeavors including budgeting/estimating, and submission for all trades contracted by B.R. McMillan. </li>
                                <li>Oversaw and negotiated newly awarded contracts for B.R. McMillan.</li>
                                <li>Established a schedule of values for each project and ensured that field reporting forms were consistent with the estimate.</li>
                                <li>Responsible for monthly billings for assigned projects.</li>
                                <li>Developed and implemented an in-depth training program for both current estimators and new hires.</li>
                                <li>Optimized the excel based estimating software used by the Estimating department.</li>
                            </ul>
                            <h6>IT Systems and SharePoint Development Manager</h6>
                            <ul>
                                <li>Enhanced the day to day workflow at B.R McMillian by developing and implementing the utilization of Office 365 and SharePoint.</li>
                                <li>Established and deployed the use of an IT ticket service platform to document IT related issues within B.R. McMillan.</li>
                                <li>Provided training and technical support to users of applications such as On-Screen Takeoff, SharePoint, network, ShoreTel, and server issues through IT ticket service.</li>
                                <li>Configured and managed Microsoft Office 365 and SharePoint user accounts.</li>
                                <li>Constructed, diagnosed, and maintained computer hardware utilized by B.R. McMillan.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h4 className="sectionSubTitle">Education</h4>
                <div className="d-flex justify-content-center">
                    <div className="container d-flex justify-content-around">
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