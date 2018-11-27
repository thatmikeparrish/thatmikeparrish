import React, { Component } from 'react';
import './Reviews.css';
import ReviewsCarousel from './ReviewsCarousel'

export default class Reviews extends Component {
    render() {

        return (
            <div className="content">
                <h2 className="sectionTitle">Reviews</h2>
                <div className="d-flex flex-row flex-wrap justify-content-around">
                    <ReviewsCarousel />
                </div>
            </div>
        );
    }
}