import React from 'react';
import './gptThreeDescription.css';
import { Feature } from '../../components';

const GPTThreeDescription = () => {
    return (
        <div className="gpt3__gpt3Description section__margin" id="gpt3desc">
            <div className="gpt3__gpt3Description-feature">
                <Feature />
            </div>
            <div className="gpt3__gpt3Description-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__gpt3Description-container">
                <Feature />
                <Feature />
                <Feature /> 
            </div>
        </div>
    );
}

export default GPTThreeDescription;