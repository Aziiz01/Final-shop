import React, { useState} from "react";
import { FaShoppingCart, FaStar} from "react-icons/fa";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import "./CardItem.css";
import Modal from 'react-bootstrap/Modal';
import ControlledCarousel from './Carousel';
import Counter from "./toggleButton";


function CardItem(props) {
    
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
    stars.push(<FaStar key={i} />);
    }
    return (
        <React.Fragment>
            <Card id={props.id} className="card" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{props.price}</ListGroup.Item>
                    <ListGroup.Item>
                        {props.etat === "In Stock" ? <FaShoppingCart /> : null}{" "}
                        {props.etat}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {stars} {props.rating}
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body  style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <Button variant="outline-primary">Buy</Button>{" "}
                    <Button
                        variant="outline-primary"
                        onClick={() => handleShow(true)}
                    >
                    Details
                    </Button>
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton className="modelHeader">
                            <Modal.Title><h1>CHECK OUT THIS COOL PRODECT</h1></Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modelBody">
                            <div className="popup-left-side">
                                <ControlledCarousel img={props.img}
                                                    img2={props.img2}
                                                    img3={props.img3}
                                />
                            </div>
                            <div className="popup-right-side">
                                <h1>{props.title}</h1>
                                <h6>{props.text}
                                </h6>
                                <h4>{props.price} TND</h4>
                                <h6>
                                    {props.etat === "In Stock" ? <FaShoppingCart /> : null}{" "}
                                    {props.etat}
                                </h6>
                                <h5>
                                    {stars} {props.rating}
                                </h5>
                                <div className="prix">
                                <Counter price={props.price} 
                                />
                                </div>          
                            </div>
                                             
                            
                            
                        </Modal.Body>
                        </Modal>
                </Card.Body>
            </Card>
        </React.Fragment>

    );
    }

    export default CardItem;
