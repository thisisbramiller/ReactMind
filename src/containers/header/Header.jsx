import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="gpt__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Enter your email' />
                    <p>Join our community today and gain access to a wealth of resources in the field of AI. Stay updated with the latest advancements, participate in engaging discussions, and collaborate with like-minded individuals. Don't miss out on this opportunity to be a part of our dynamic and innovative community.</p>
                    <button type="button">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Header;