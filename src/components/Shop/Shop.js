import React from 'react';
import Fragrance from '../Fragrance/Fragrance';
import Hair from '../Hair/Hair';
import Makeup from '../Makeup/Makeup';
import MomAndBaby from '../MomAndBaby/MomAndBaby';
import PersonalCare from '../PersonalCare/PersonalCare';
import Skin from '../Skin/Skin';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Slider from '../Slider/Slider';


const Shop = () => {
    return (
        <div>
            <Slider> </Slider>
            <Skin> </Skin>
            <Hair> </Hair>     
            <PersonalCare> </PersonalCare>  
            <MomAndBaby> </MomAndBaby> 
            <Fragrance> </Fragrance>  
       
         
    </div>
    );
};

export default Shop;