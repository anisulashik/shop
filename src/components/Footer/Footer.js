import React from 'react';
import fblogo from '../../img/fbIcon.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContent">
                <h6> <small> Nahyan's is a UK & Korean online based shopping page. Our products are 100% Authentic. It's a trusted online shopping platform for everyone. I sell beauty and cosmetic products for retail and wholesale. </small> </h6>
            </div>
            <div className="footerContent">
                <p><small> Contact us </small></p>
                <h6>01929-438075</h6>
            </div >
            <div  className="footerContent">
                <h6> Visit Our facebook Page</h6>
                <a href="https://www.facebook.com/Nahyanbd">
                     <img src={fblogo} alt="" /> 
                </a>
                
            </div>
        </div>
    );
};

export default Footer;