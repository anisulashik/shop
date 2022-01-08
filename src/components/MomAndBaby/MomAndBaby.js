import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';

import image10 from '../../img/product9.jpg'
import image11 from '../../img/product10.jpg'
import image12 from '../../img/product12.jpg'
const MomAndBaby = () => {
    return (
        <div>
            <div>
        <div> 
           <h5 className="title"> Mom's & Babies </h5>
       </div>
       <CardGroup>
           <Card className="card">
           <Card.Img variant="top" className="cardimg"  src={image10} />
               <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga officia at explicabo officiis quisquam sequi atque distinctio ducimus numquam eaque.
               </Card.Text>
               </Card.Body>
               <Card.Footer>
               <small className="text-muted">Last updated 3 mins ago</small>
               </Card.Footer>
           </Card>
           <Card>
               <Card.Img variant="top" className="cardimg"  src={image11} />
               <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga officia at explicabo officiis quisquam sequi atque distinctio ducimus numquam eaque.
               </Card.Text>
               </Card.Body>
               <Card.Footer>
               <small className="text-muted">Last updated 3 mins ago</small>
               </Card.Footer>
           </Card>
           <Card>
               <Card.Img variant="top" src="holder.js/100px160" className="cardimg" src={image12} />
               <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga officia at explicabo officiis quisquam sequi atque distinctio ducimus numquam eaque.
               </Card.Text>
               </Card.Body>
               <Card.Footer>
               <small className="text-muted">Last updated 3 mins ago</small>
               </Card.Footer>
           </Card>
</CardGroup>
   </div>
        </div>
    );
};

export default MomAndBaby;