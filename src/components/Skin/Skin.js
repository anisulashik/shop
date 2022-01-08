import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';

import image4 from '../../img/product4.jpg'
import image5 from '../../img/product5.jpg'
import image6 from '../../img/product6.jpg'

const Skin = () => {
    return (
        <div>
             <div> 
                <h5 className="title"> Skin Care </h5>
            </div>
            <CardGroup>
                <Card className="card">
                <Card.Img variant="top" className="cardimg"  src={image4} />
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
                    <Card.Img variant="top" className="cardimg"  src={image5} />
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
                    <Card.Img variant="top" src="holder.js/100px160" className="cardimg" src={image6} />
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

export default Skin;