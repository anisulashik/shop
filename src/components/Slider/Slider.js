import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/shopLogo.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <div className="sliderContainer"> 
        <Carousel className="slider">
                    <Carousel.Item>
                        <img src={image1} alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://www.liveenhanced.com/wp-content/uploads/2021/05/makeup-stock-getty.jpg" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://perfumesociety.org/wp-content/uploads/2019/03/FRAGRANCE_DU_BOIS_PATCHOULI_ARGENT-1024x576.jpg" alt=""/>
                     </Carousel.Item>
         </Carousel>
         </div>  
    );
};

export default Slider;