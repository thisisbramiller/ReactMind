import React from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section_padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
        </div>
    );
}

export default Possibility;