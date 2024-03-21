import React from 'react';
import './gptThreeDescription.css';
import { Feature } from '../../components';

const GPTThreeDescription = () => {
    return (
        <div className="gpt3__gpt3Description section__margin" id="gpt3desc">
            <div className="gpt3__gpt3Description-feature">
                <Feature title="What is GPT-3" text="Carrot cake tart sweet gingerbread dessert gingerbread muffin macaroon. Candy cookie cheesecake jelly powder shortbread. Biscuit topping danish bear claw biscuit danish. Muffin lemon drops icing chocolate bar croissant halvah. Soufflé macaroon apple pie pudding macaroon dessert tiramisu toffee tiramisu. Tart chocolate cake danish biscuit jelly-o wafer jelly beans marzipan cotton candy. Cotton candy candy canes dessert toffee dessert croissant pie wafer marshmallow. Cotton candy shortbread danish ice cream sesame snaps gummi bears cookie chocolate chocolate. Cupcake tiramisu donut toffee pie ice cream. Chocolate cake chocolate bar lollipop jujubes lollipop apple pie carrot cake lollipop candy." />
            </div>
            <div className="gpt3__gpt3Description-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__gpt3Description-container">
                <Feature title="Chatbots" text="Cupcake ipsum dolor sit amet sugar plum. Tiramisu bonbon oat cake dragée gummi bears. Bonbon sugar plum chupa chups cake pie cupcake sugar plum apple pie." />
                <Feature title="Knowledgebase" text="Ice cream wafer dessert brownie dragée chocolate bar. Bear claw toffee jelly beans gummi bears wafer apple pie cookie. Jelly beans ice cream apple pie jelly toffee marzipan." />
                <Feature title="Education" text="I love gummi bears I love sweet roll tart lemon drops apple pie. Oat cake wafer candy canes pie gingerbread cheesecake cookie. Croissant bonbon biscuit I love oat cake jujubes. Jelly-o icing liquorice cupcake I love jelly beans soufflé." /> 
            </div>
        </div>
    );
}

export default GPTThreeDescription;