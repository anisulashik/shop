import React from 'react';
import logo from '../../img/shopLogo.jpg'
import './Header.css'
import {nav} from 'react-bootstrap'
const Header = () => {
    return (
        <div className="header">
            
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">NAHYAN'S</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/makeup">Makeup</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/skin">Skin</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/hair">Hair</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/personalcare">Personal care</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/momandbaby">Mom & Baby</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/fragrance">Fragrance</a>
                        </li>
                        
                </ul>
                
                </div>
             </div>
        </nav>
    </div>
           
        </div>
    );
};

export default Header;