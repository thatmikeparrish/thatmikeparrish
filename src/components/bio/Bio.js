import React, { Component } from 'react';
import './Bio.css';

export default class Bio extends Component {
    
    render() {

        console.log("First, your new feature idea was not part of our negotiations nor our agreement, so I must do nothing. And secondly, you must be a developer for the developer 's code to apply and you're not. And thirdly, the documentation is more what you'd call 'guidelines' than actual rules. Welcome aboard the JavaScript Team, Junior Dev.");

        return (
            <div className="bio content">
                <h2 className="sectionTitle">Bio</h2>
                <div className="container d-flex justify-content-around">
                    <div className="myBio d-flex flex-column justify-content-around">
                        <p>Hi, I'm Mike Parrish!</p>
                        <p>I’m a huge nerd with a passion for development! I enjoy reading comics and playing games just as much as I enjoy backpacking and working on my rail buggy. Development gives me a technical way to bring my creativity to light. I love working with ReactJS, but I’m also proficient in HTML5, CSS3, JavaScript, ReactJS, C#, SQL, Linq, and Dapper while at NSS. I’m fortunate to be making a living in a career I truly enjoy.</p>
                    </div>
                    <div className="mike" alt="It's me!"></div>
                </div>
                <h6 className="devQuote line">"Things aren't always #000000 and #ffffff, coding the #808080 since 2018."</h6>
            </div>
        );
    }
}