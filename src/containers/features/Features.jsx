import React from 'react';
import './features.css';

const featuresData = [
    {
        title: "Improving end distrusts instantly ",
        text: "Cupcake ipsum dolor sit amet sugar plum. Tiramisu bonbon oat cake dragée gummi bears. Bonbon sugar plum chupa chups cake pie cupcake sugar plum apple pie."
    },
    {
        title: "Become the tended active",
        text: "Ice cream wafer dessert brownie dragée chocolate bar. Bear claw toffee jelly beans gummi bears wafer apple pie cookie. Jelly beans ice cream apple pie jelly toffee marzipan."
    },
    {
        title: "Message or am nothing",
        text: "I love gummi bears I love sweet roll tart lemon drops apple pie. Oat cake wafer candy canes pie gingerbread cheesecake cookie. Croissant bonbon biscuit I love oat cake jujubes. Jelly-o icing liquorice cupcake I love jelly beans soufflé."
    },
    {
        title: "Really boy law county",
        text: "Cupcake ipsum dolor sit amet sugar plum. Tiramisu bonbon oat cake dragée gummi bears. Bonbon sugar plum chupa chups cake pie cupcake sugar plum apple pie."
    }
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features__heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((feature, index) => {
                    return (
                        <div className="gpt3__features-feature" key={index}>
                            <h1>{feature.title}</h1>
                            <p>{feature.text}</p>
                        </div>
                    );
                    }
                )}
            </div>
        </div>
    );
}

export default Features;