import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Carousel } from 'react-bootstrap';
import Makeup from './components/Makeup/Makeup';
import Skin from './components/Skin/Skin';
import Hair from './components/Hair/Hair'
import MomAndBaby from './components/MomAndBaby/MomAndBaby';
import Fragrance from './components/Fragrance/Fragrance';
import Shop from './components/Shop/Shop';
import PersonalCare from './components/PersonalCare/PersonalCare';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';



function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Router> 

          <Switch> 
              <Route path="/home">
                 <Shop> </Shop> 
              </Route>
              <Route path='/makeup'>
                      <Makeup> </Makeup>    
              </Route>
              <Route path='/skin'>
                  <Skin> </Skin>
              </Route > 
              <Route path='/hair'> 
                  <Hair> </Hair>
              </Route>
              <Route path='/personalcare'> 
                <PersonalCare> </PersonalCare>
              </Route>
              <Route path='/momandbaby'>
                <MomAndBaby> </MomAndBaby>
              </Route> 
              <Route> 
                <Fragrance path='/fragrance'>  </Fragrance>
              </Route>
            
          </Switch>
      </Router>  
      <Footer> </Footer>
    </div>
  );
}

export default App;
