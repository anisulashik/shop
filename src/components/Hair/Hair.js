import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';

import image7 from '../../img/product7.jpg'
import image8 from '../../img/product8.jpg'
import image9 from '../../img/product9.jpg'


const Hair = () => {
    return (
        
            <div>
             <div> 
                <h5 className="title"> Hair Care </h5>
            </div>
            <CardGroup>
                <Card className="card">
                <Card.Img variant="top" className="cardimg"  src={image7} />
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
                    <Card.Img variant="top" className="cardimg"  src={image8} />
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
                    <Card.Img variant="top" src="holder.js/100px160" className="cardimg" src={image9} />
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
      
    );
};

export default Hair;