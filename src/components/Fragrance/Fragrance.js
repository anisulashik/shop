import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import image1 from '../../img/product1.jpg'
import image2 from '../../img/product2.jpg'
import image3 from '../../img/product3.jpg'

const Fragrance = () => {
    return (
        
             <div className="cardContainer">
            <div> 
                <h5 className="title"> Fragrance </h5>
            </div>
            <CardGroup>
                <Card className="card">
                <Card.Img variant="top" className="cardimg"  src={image1} />
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
                    <Card.Img variant="top" className="cardimg"  src={image2} />
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
                    <Card.Img variant="top" src="holder.js/100px160" className="cardimg" src={image3} />
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

export default Fragrance;