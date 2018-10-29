import React, { Component } from 'react';

import CSharp from '../../img/languageLogos/csharp.jpg'
import CSS from '../../img/languageLogos/css3.png'
import Git from '../../img/languageLogos/git.png'
import GitHub from '../../img/languageLogos/github.png'
import HTML from '../../img/languageLogos/html5.png'
import JavaScript from '../../img/languageLogos/javascript.jpg'
import Linq from '../../img/languageLogos/linq.jpg'
import ReactLogo from '../../img/languageLogos/react.png'
import SQL from '../../img/languageLogos/sql.png'

export default class Bio extends Component {
    render() {
        return (
            <div className="content">
                <div className="d-flex justify-content-center">
                    <h2 className="sectionTitle">Bio</h2>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="mike" alt="Its a pic of me!"></div>
                    <div className="myBio">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    <img className="LanguageLogo" src={HTML} alt="C Sharp"/>
                    <img className="LanguageLogo" src={CSS} alt="C Sharp"/>
                    <img className="LanguageLogo" src={JavaScript} alt="C Sharp"/>
                    <img className="LanguageLogo" src={ReactLogo} alt="C Sharp"/>
                    <img className="LanguageLogo" src={Git} alt="C Sharp"/>
                    <img className="LanguageLogo" src={GitHub} alt="C Sharp"/>
                    <img className="LanguageLogo" src={CSharp} alt="C Sharp"/>
                    <img className="LanguageLogo" src={Linq} alt="C Sharp"/>
                    <img className="LanguageLogo" src={SQL} alt="C Sharp"/>
                </div>
            </div>
        );
    }
}